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

    //2nd way
    // var key = e.target.name;
    // var value = e.target.value;
    // var obj = {};
    // obj[key] = value;
    // this.setState(obj);
  };

  submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("https://localhost:3001/api/employees/", this.state)
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
      <div
        className="container bg-info p-3 w-50 mt-3"
        style={{ borderRadius: "10px", maxHeight: "825px" }}
      >
        <div className="col-md-12">
          <h2 className="text-center text-white">Registration Form</h2>
          <hr />
          <div className="container">
            <div className="col-md-10">
              <form
                className="m-5"
                id="empForm"
                onSubmit={(e) => this.submitHandler(e)}
              >
                <div className="form-group ">
                  <label>FirstName :</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="firstname"
                    name="first_name"
                    value={first_name}
                    pattern="^[a-zA-Z\s]+$"
                    required
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
                    pattern="^[a-zA-Z\s]+$"
                    required
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
                    pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                    required
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="form-group ">
                  <label>Contact :</label>
                  <input
                    type="digit"
                    className="form-control"
                    placeholder="contact_number"
                    name="contact"
                    value={contact}
                    pattern="^\d{10}$"
                    required
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
                    pattern="^[A-Za-z0-9'\.\-\s\,]$"
                    required
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
                    pattern="\d{1,5}"
                    required
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
                    pattern="^[a-zA-Z\s]+$"
                    required
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="p-d-flex p-jc-between">
                  <Button
                    type="submit"
                    className="p-button-rounded p-button-success mt-4"
                  >
                    Submit
                  </Button>
                  <Button
                    className="p-button-rounded p-button-danger mt-4"
                    onClick={() => this.CancelHandler()}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddForm;
