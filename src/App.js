import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/screens/Header";
import Home from "./components/screens/Home";
import Checkout from "./components/screens/Checkout";
import Login from "./components/screens/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/screens/Payment";

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/login" exact component={Login} />
          <Route path="/payment" exact component={Payment} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
