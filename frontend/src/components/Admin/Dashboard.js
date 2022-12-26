import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
import MetaData from "../layout/MetaData";

const Dashboard = ({ user }) => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  const filterProducts =
    products && products.filter((product) => product.user === user._id);
  // console.log(filterProducts);
  const orderedProductsIds = [];

  orders &&
    orders.filter((order) =>
      order.orderItems.map((product) =>
        orderedProductsIds.push(product.product)
      )
    );
  const filterOrdererdProducts = orderedProductsIds.map((id) =>
    products.filter((product) => product._id === id)
  );
  const filterOrders = [];
  filterOrdererdProducts.map((products) =>
    products.map((product) => {
      if (product.user === user._id) {
        filterOrders.push(product);
      }
      return "";
    })
  );
  console.log(filterOrders);

  if (user.role === "admin") {
    products &&
      products.forEach((item) => {
        if (item.stock === 0) {
          outOfStock += 1;
        }
      });
  } else {
    filterProducts &&
      filterProducts.forEach((item) => {
        if (item.stock === 0) {
          outOfStock += 1;
        }
      });
  }

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  if (user.role === "admin") {
    orders &&
      orders.forEach((item) => {
        totalAmount += item.totalPrice;
      });
  } else {
    filterOrders &&
      filterOrders.forEach((item) => {
        totalAmount += item.price;
      });
  }

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["#097969"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, 4000],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [
          (outOfStock,
          user.role === "admin"
            ? products.length - outOfStock
            : filterProducts.length - outOfStock),
        ],
        // data: [2, 10],
      },
    ],
  };
  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
      <Sidebar user={user} />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹{totalAmount}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>
                {user.role === "admin"
                  ? products && products.length
                  : filterProducts && filterProducts.length}
              </p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>

              <p>
                {user.role === "admin"
                  ? orders && orders.length
                  : filterOrders && filterOrders.length}
              </p>
            </Link>

            {user.role === "admin" ? (
              <Link to="/admin/users">
                <p>Users</p>

                <p> {users && users.length} </p>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="lineChart">
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
