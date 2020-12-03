import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AddForm from "./AddForm";
import FormList from "./FormList";
import EditTable from "./EditTable";
import Views from "./Views";

class Home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">College Name</nav>

        <Router>
          <Link to="Datas">Datas</Link>
          <Link to="AddForm" style={{ marginLeft: " 10px" }}>
            Add Form
          </Link>
          <Switch>
            <Route exact path="/Datas" component={FormList} />
            <Route exact path="/:editData/:id" component={EditTable} />
            <Route path="/:view/:Data/:id" component={Views} />
            <Route path="/AddForm" component={AddForm} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Home;
