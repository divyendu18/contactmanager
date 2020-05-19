import React, { Component } from "react";
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Contacts from "./Component/contacts/Contacts";
import Header from "./Component/layout/Header";
import Test from "./Component/test/Test"
import  {Provider } from './Context';

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import AddContacts from "./Component/contacts/AddContact";
import About from './Component/pages/About';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="conatiner">
          <Switch>
          <Route exact path="/" component=
            {Contacts}/>
            <Route exact path="/contact/add" component=
            {AddContacts}/>
          <Route exact path="/about" component=
            {About}/>
            <Route exact path="/test" component=
            {Test}/>
          </Switch>
          
        </div>
      </div>
      </Router>
      </Provider>
    );
  }
}
export default App;
