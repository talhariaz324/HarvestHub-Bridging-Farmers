import React from 'react'

function Contact() {
  return (
    <div>
        <div id="contact" className="section wb">
        <div className="container">
          <div className="section-title text-center">
            <h3>Get in touch</h3>
            <p className="lead">Let us give you more details about the special offer website you want us. Please fill out the form below. <br />We have million of website owners who happy to work with us!</p>
          </div>{/* end title */}
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="contact_form">
                <div id="message" />
                <form id="contactform" className="row" action="contact.php" name="contactform" method="post">
                  <fieldset className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input type="text" name="first_name" id="first_name" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input type="text" name="last_name" id="last_name" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input type="email" name="email" id="email" className="form-control" placeholder="Your Email" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <textarea className="form-control" name="comments" id="comments" rows={6} placeholder="Give us more details.." defaultValue={""} />
                    </div>
                    <div className="text-center cont-btn">
                      <button type="submit" value="SEND" id="submit" className="btn11"><span>Submit</span></button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>{/* end col */}
          </div>{/* end row */}
          <div className="row">
            <div className="offset-md-1 col-sm-10 col-md-10 offset-sm-1 pd-add">
            
              <div className="address-item">
                <div className="address-icon">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </div>
                <h3>Email Us</h3>
                <p>info@yoursite.com
                  <br />info@yoursite.com</p>
              </div>
              <div className="address-item">
                <div className="address-icon">
                  <i className="icon icon-headphones" />
                </div>
                <h3>Call Us</h3>
                <p>+61 3 8376 6284
                  <br />+61 3 8376 6185</p>
              </div>
            </div>
          </div>{/* end row */}
        </div>{/* end container */}
      </div>{/* end section */}
    </div>
  )
}

export default Contact
