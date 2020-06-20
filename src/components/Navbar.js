import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
export class Navbar extends Component {
    render() {
        return (
            <AppBar position = "fixed">
                <ToolBar className="nav-container">
                    <Fragment>
                        <Button color="inherit" componennt = {Link} to = "/login">Login</Button>
                        <Button color="inherit" component={Link} to ="/">Home</Button>
                        <Button color = "inherit" component={Link} to="/signup">Sign Up</Button>
                    </Fragment>
                </ToolBar>
            </AppBar>
        )
    }
}

export default Navbar
