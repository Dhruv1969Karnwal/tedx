import "./contactUs.css";
import vector from "../../images/Vector.png";
import React, { useState } from "react";
const ContactUs = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    number: "",
    query: "",
  });
  //   const { name, email, number, query } = state;
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (!name || !email || !query) {
  //       toast.error("Please provide value in each input field");
  //     } else {
  //       firebaseDB.child("contacts").push(state);
  //       setState({ name: "", email: "", number: "", query: "" });
  //       toast.success("Form Submitted Successfully");
  //     }
  //   };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="cover">
      <div className="cover2">
        <h2 className="contactUs">Contact us</h2>
        <h1 className="still">Still any Queries?</h1>
        <div className="cover3">
          <div className="left child">
            <p>
              Write us at:
              <br />
              gmail@jssate.com
              <br />
              <br />
            </p>
            <p>Get connected with us on:</p>
            <div className="icons">
              <img className="icon" src={vector} />
              <img className="icon" src={vector} />
              <img className="icon" src={vector} />
            </div>
          </div>
          <div className="right child">
            <form className="form">
              <div className="form-group">
                <input placeholder="Name*" type="text" required />
              </div>
              <div className="form-group">
                <input placeholder="Email*" type="email" required />
              </div>
              <div className="form-group">
                <input placeholder="Phone Number" type="number" />
              </div>
              <div className="form-group">
                <input placeholder="Query*" type="text" required />
              </div>{" "}
              <button className="button form-group" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
