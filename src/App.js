import React from 'react';
import './App.css';
import { Route, Link, } from "react-router-dom";
import {FlowersList} from "./components/FlowerList/FlowersList";
import {FlowersForm} from "./components/FlowerForm/FlowersForm";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <FlowersForm />
        <div className="flowersListLinkWrapper">
          <Link to="/list">List</Link>
        </div>
      </Route>
      <Route path="/list">
        <div className="flowersFormLinkWrapper">
          <Link to="/">Back to form</Link>
        </div>
        <FlowersList />
      </Route>
    </div>
  );
}

export default App;
