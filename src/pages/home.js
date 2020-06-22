import React, { Component, Typography } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
//import profile
import { connnect, connect } from "react-redux";
import { getChats } from "../components/redux/actions/dataActions";
const styles = (theme) => ({
  ...theme.spreadThis,
});
export class home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="container">
        <Grid container>
         
        </Grid>
      </div>
    );
  }
}
home.propTypes = {
  classes: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  UI: PropTypes.object.isRequired,
});
export default home;
