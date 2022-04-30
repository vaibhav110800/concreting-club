import React from "react";
import Footer from "./components/footer";
import Menubar from "./components/menubar";

const Contact = () => {
  return (
    <div>
      <Menubar />
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <h1>Contact</h1>
        <div className="contact-form-inner">

          <div className="form-left">
            <div className="form-box form-box1">
              Phone: 8965785412
            </div>
            <div className="form-box form-box1">
              E:mail : xyz@gmail.com
            </div>
            <div className="form-box form-box1">
              Address: Sydney, Australia
            </div>

          </div>

          <div className="form-right">
            <form action="">
              <label htmlFor="">name</label> <br />
              <input type="text" /> <br />

              <label htmlFor="">email</label><br />
              <input type="text" /> <br />

              <label htmlFor="">message</label> <br />
              <textarea name="message" id="" cols="30" rows="10"></textarea> <br />

              <button type="submit">
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>

      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3
        !1d424146.1030167404!2d150.65177897744343!3d-33.84735664867307!
        2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a
        743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1se
        n!2sin!4v1651338544554!5m2!1sen!2sin"
          width="100%" height="450" style={{ border: "0px" }} allowfullscreen=""
          loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
