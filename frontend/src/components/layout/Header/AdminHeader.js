import React from "react";
import "./AdminHeader.css";
function AdminHeader({ user }) {
  return (
    <div className="greetings">
      {user.role === "admin" ? (
        <p>Welcome Back {user.name}!</p>
      ) : (
        <p>Welcome, {user.name}</p>
      )}
    </div>
  );
}

export default AdminHeader;
