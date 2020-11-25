import React, { Component } from "react";
import { Button } from "primereact/button";
import axios from "axios";

// import {Link} from 'react-router-dom'

class AddForm extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    contact: "",
    address: "",
    employee_id: "",
    position: "",
  };


  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };



  submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/employees", this.state)
      .then((res) => {
        window.alert("Your Form is Submitted");
      })
      .catch((err) => {
        console.log(err);
      });
      document.getElementById("reset").reset();

  };



  render() {
    const {
      first_name,
      last_name,
      email,
      contact,
      address,
      employee_id,
      position,
    } = this.state;
    return (
      <div className="container bg-light p-3">
        <h2 className="text-center">Registration Form</h2>
        <hr />
        <form className="m-5" id="reset">
          <div className="form-group ">
            <label htmlFor="fName">FirstName :</label>
            <input
              type="text"
              className="form-control"
              placeholder="firstname"
              id="fName"
              name="first_name"
              value={first_name}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group ">
            <label>LastName :</label>
            <input
              type="text"
              className="form-control"
              placeholder="lastname"
              name="last_name"
              value={last_name}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group ">
            <label>Email :</label>
            <input
              type="email"
              className="form-control"
              placeholder="e-mail"
              name="email"
              value={email}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group ">
            <label>Contact :</label>
            <input
              type="digit"
              pattern="[0-9]*"
              className="form-control"
              placeholder="contact_number"
              name="contact"
              value={contact}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group ">
            <label>Address :</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="address"
              name="address"
              value={address}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group ">
            <label>Employee_id :</label>
            <input
              type="digit"
              className="form-control"
              placeholder="employee_id"
              name="employee_id"
              value={employee_id}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group ">
            <label>Position :</label>
            <input
              type="text"
              className="form-control"
              placeholder="position"
              name="position"
              value={position}
              onChange={this.changeHandler}
            />
          </div>
          <div className="p-d-flex p-jc-evenly">
            <Button
              icon="pi pi-check"
              value="submit"
              className="p-button-rounded p-button-success mt-4"
              onClick={this.submitHandler}
            />
            <Button
              icon="pi pi-times"
              className="p-button-danger p-button-rounded mt-4"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default AddForm;
