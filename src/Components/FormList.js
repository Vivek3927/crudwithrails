import React, { Component } from "react";
import axios from "axios";
import {Table, Button} from "react-bootstrap"

class FormList extends Component {
  state = {
    datas: [],
    error: "",
  };
  componentDidMount() {
    axios
      .get("http://localhost:3001/api/employees")
      .then((res) => {
        // console.log(res);
        this.setState({ datas: res.data });
      })
      .catch((err) => {
        // console.log(err);
        this.setState({ error: "No Data" });
      });
  }

handleDelete = (listDeleted) => {
    console.log(listDeleted);
    if(window.confirm("Are You Sure?")){
        axios.delete("http://localhost:3001/api/employees/" +listDeleted).then(remainData => {
            console.log(remainData)
        }).catch(errDelete => console.log(errDelete))
    
    }
}  

  render() {
    const { datas, error } = this.state;
    return (
      <div className="container">
         <div className="col-md">
         <Table size="sm" striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Emp id</th>
              <th>Position</th>
              <th>Edit List</th>
              <th>Delete List</th>
            </tr>
          </thead>
          <tbody >
            {datas.map((info) => (
               <tr key={info.id} >
                <td>{info.id}</td>
                <td>{info.first_name}</td>
                <td>{info.last_name}</td>
                <td>{info.email}</td>
                <td>{info.contact}</td>
                <td>{info.address}</td>
                <td>{info.employee_id}</td>
                <td>{info.position}</td>
                <td><Button variant="warning" onClick={() =>{console.log(this.props.editProduct)}}>Edit</Button></td>
                <td><Button variant="danger" onClick={() =>{this.handleDelete(info.id)}}>Delete</Button></td>
              </tr>
                ))}
          </tbody>
        </Table>
         </div>
      </div>
    );
  }
}
export default FormList;
