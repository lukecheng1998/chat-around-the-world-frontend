import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
const styles = (theme) => ({
    ...theme.spreadThis
})
class signup extends Component {
    render() {
        const {
            classes
        } = this.props;
        return (
            <div>
                <h1>" "</h1>
                <Typography variant="h2" align="center">
                    Sign Up for an Account
                </Typography>
            </div>
        )
    }
}
signup.propTypes = {
    classes: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
}

export default signup
