import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import Navbar from "./components/Navbar";
import createMuiTheme from "@material-ui/core/styles/createBreakpoints";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import store from "./components/redux/store";
import themefile from "./components/util/theme";
import { Provider } from 'react-redux';

const theme = createMuiTheme(themefile);
function App() {
  return (
    
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/login" component={login} />
                <Route exact path="/signup" component={signup} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    
  );
}

export default App;
