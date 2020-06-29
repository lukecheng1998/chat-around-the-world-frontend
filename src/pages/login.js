import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { TextField, withStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {loginUser} from '../components/redux/actions/userActions'
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from "prop-types"
const styles = (theme) => ({
  ...theme.spreadThis
})
class login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.UI.errors){
      this.setState({errors: nextProps.UI.errors})
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(userData, this.props.history)
  }
  render() {
    const {
      classes,
      UI: {loading}
    } = this.props
    const {
      errors
    } = this.props
    return (
      <div>
        <h1>" "</h1>
        <Typography variant = "h2" className={classes.pageTitle}>
          Log In
        </Typography>
        <form>
          <TextField id="email" name="email" type="email" label="email" className={classes.TextField}fullWidth>
            Email
          </TextField>
          <TextField id="password" name="password" type="password" label="password" fullWidth>
            Password
          </TextField>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
      </div>
    )
  }
}
login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
})
const mapActionsToProps = {
  loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(login))
