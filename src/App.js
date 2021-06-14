import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/screens/Header";
import Home from "./components/screens/Home";
import Checkout from "./components/screens/Checkout";
import Login from "./components/screens/Login";

function App() {
  return (
      <Router>
    <div className="App">
      <Header />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/login" exact component={Login} />
        </Switch>
    </div>
      </Router>
  );
}

export default App;
