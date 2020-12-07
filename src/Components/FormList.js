import React, { Component } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class FormList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      error: "",
      redirect: false,
    };
  }
  componentDidMount() {
    axios
      .get("https://servercrud.herokuapp.com/api/employees")
      .then((res) => {
        this.setState({ datas: res.data });
      })
      .catch((err) => {
        // console.log(err);
        this.setState({ error: "Something went Wrong!" });
      });
  }

  handleEdit = (info) => {
    // console.log(info);
    // this.props.history.push("/EditData", { editDatas: datas });
    this.props.history.push(`/edit/${info.id}`);
  };

  handleDelete = (deleteId) => {
    if (window.confirm("Are You Sure?")) {
      axios
        .delete("https://servercrud.herokuapp.com/api/employees/" + deleteId)
        .then((remainData) => {
          this.setState({ datas: remainData, redirect: true });
        })
        .catch((errDelete) => console.log(errDelete));
    }
  };

  handleView = (info) => {
    this.props.history.push(`/view/data/${info.id}`);
  };

  render() {
    const { datas, error, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    if (error) {
      return (
        <div>
          <h6 style={{ fontSize: "16px", textAlign: "center", color: "red" }}>
            {error}
          </h6>
        </div>
      );
    }
    if (datas.length === 0 && []) {
      return (
        <h2 style={{ color: "gray", textAlign: "center" }}>
          No Data Available
        </h2>
      );
    } else {
      return (
        <div className="container">
          <hr />
          <div className="col-md">
            <Table striped bordered hover className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th className="d-flex justify-content-center">Action</th>
                  <th>Views</th>
                </tr>
              </thead>
              <tbody>
                {datas.map((info) => (
                  <tr key={info.id}>
                    <td>{info.id}</td>
                    <td>{info.first_name}</td>
                    <td>{info.last_name}</td>
                    <td>{info.email}</td>
                    <td className="d-flex justify-content-around">
                      <Button
                        variant="warning"
                        onClick={() => this.handleEdit(info)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => {
                          this.handleDelete(info.id);
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          this.handleView(info);
                        }}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      );
    }
  }
}
export default FormList;
