import React from "react";
import "./App.css";
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom";
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route to="/" component={home} />
          <Route to="/login" component={login} />
          <Route to="/signup" component={signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
