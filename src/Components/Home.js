import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AddForm from "./AddForm";
import FormList from "./FormList";
import EditTable from "./EditTable";
import Views from "./Views";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ImgLogo from "../ImgLogo.jpg";
import Image from "react-bootstrap/Image";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar expand="lg" bg="dark" variant="dark">
              <Nav className="mr-auto">
                <Image
                  src={ImgLogo}
                  alt="Logo-Img"
                  roundedCircle
                  style={{
                    width: "80px",
                    height: "80px",
                    padding: "10px",
                  }}
                />
              </Nav>
              <div>
                <Link to="Datas" className="Link">
                  Datas
                </Link>
                <Link to="AddForm" className="Link">
                  Add Form
                </Link>
              </div>
            </Navbar>
          </div>

          <Switch>
            <Route exact path="/Datas" component={FormList} />
            <Route exact path="/:edit/:id" component={EditTable} />
            <Route path="/:view/:Data/:id" component={Views} />
            <Route path="/AddForm" component={AddForm} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Home;
