import React, { Component } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { Redirect } from "react-router-dom";

export default class EditTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editData: [],
      redirect: false,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get("http://localhost:3001/api/employees/" + id)
      .then((res) => {
        this.setState({ editData: res.data });
      })
      .catch((err) => {
        // console.log(err);
        this.setState({ error: "Something went Wrong!" });
      });
  }

  changeHandler = (e) => {
    // const inpField = this.state.inputField;
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .put("http://localhost:3001/api/employees/" + id, this.state)
      .then((res) => {
        this.setState({ editData: res, redirect: true });
        window.alert("Form Updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  CancelHandler = () => {
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/Datas" />;
    }
    return (
      <div>
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
                defaultValue={this.state.editData.first_name}
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
                onChange={this.changeHandler}
                defaultValue={this.state.editData.last_name}
              />
            </div>
            <div className="form-group ">
              <label>Email :</label>
              <input
                type="email"
                className="form-control"
                placeholder="e-mail"
                name="email"
                defaultValue={this.state.editData.email}
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
                defaultValue={this.state.editData.contact}
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
                defaultValue={this.state.editData.address}
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
                defaultValue={this.state.editData.employee_id}
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
                defaultValue={this.state.editData.position}
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
      </div>
    );
  }
}
