import React, { Component } from "react";
import { Button } from "primereact/button";
import axios from "axios";
import { Redirect } from "react-router-dom";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  contact: "",
  address: "",
  employee_id: "",
  position: "",
  redirect: false,
};

class AddForm extends Component {
  state = initialState;

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/employees/", this.state)
      .then((res) => {
        this.setState({ redirect: true });
        window.alert("Your Form is Submitted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  CancelHandler = () => {
    this.setState({ redirect: true });
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
    if (this.state.redirect) {
      return <Redirect to="/Datas" />;
    }
    return (
      <div className="container bg-light p-3">
        <h2 className="text-center">Registration Form</h2>
        <hr />
        <form className="m-5" id="empForm">
          <div className="form-group ">
            <label>FirstName :</label>
            <input
              type="text"
              className="form-control"
              placeholder="firstname"
              name="first_name"
              value={first_name}
              onChange={this.changeHandler}
            />
            <p>
              Username must be lowercase including numbers and contain 5 - 12
              characters
            </p>
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
          <div className="p-d-flex p-jc-between">
            <Button
              type="submit"
              className="p-button-rounded p-button-success mt-4"
              onClick={(e) => this.submitHandler(e)}
            >
              Submit
            </Button>
            <Button
              type="submit"
              className="p-button-rounded p-button-danger mt-4"
              onClick={() => this.CancelHandler()}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddForm;
