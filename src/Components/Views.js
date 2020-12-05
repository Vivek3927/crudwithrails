import axios from "axios";
import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

export default class Views extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewData: [],
      error: "",
      redirect: false,
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get("http://localhost:3001/api/employees/" + id)
      .then((res) => {
        this.setState({ viewData: res.data });
      })
      .catch((err) => {
        // console.log(err);
        this.setState({ error: "Something went Wrong!" });
      });
  }

  handleBackToData = () => {
    this.setState({ redirect: true });
  };

  render() {
    const { viewData, error, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/Datas" />;
    }

    return (
      <div className="container">
        <div className="col-md-5">
          {viewData ? (
            <Table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Employee_id</th>
                  <th>Position</th>
                  <th>Views</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{viewData.id}</td>
                  <td>{viewData.first_name}</td>
                  <td>{viewData.last_name}</td>
                  <td>{viewData.email}</td>
                  <td>{viewData.contact}</td>
                  <td>{viewData.address}</td>
                  <td>{viewData.employee_id}</td>
                  <td>{viewData.position}</td>
                  <td>
                    <Button variant="secondary" onClick={this.handleBackToData}>
                      Back to Data
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          ) : (
            error
          )}
        </div>
      </div>
    );
  }
}
