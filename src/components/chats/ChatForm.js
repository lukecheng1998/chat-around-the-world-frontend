import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles'

//MUI stuff
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

//Redux
import { connect } from 'react-redux';
import { submitChat } from '../../redux/actions/dataActions';

const styles = theme => ({
    ...theme.spreadThis
})
class ChatForm extends Component {
    state = {
        body: '',
        errors: {}
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.UI.errors){
            this.setState({
                errors: nextProps.UI.errors
            })
        }
        if(!nextProps.UI.errors && !nextProps.UI.loading){
            this.setState({body: ''});
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.submitChat({ 
            userHandle: this.props.userHandle,
            body: this.state.body 
        })
    }
    render() {
        const {classes, authenticated } = this.props;
        const errors = this.state.errors;
        const chatMarkupForm = authenticated ? (
            <Grid item sm={12} style = {{ textAlign: 'center' }}>
                <form onSubmit = {this.handleSubmit}>
                    <TextField 
                        name="body"
                        type="text"
                        label=""
                        error = {errors.chat ? true : false}
                        helperText = {errors.chat}
                        value={this.state.body}
                        onChange={this.handleChange}
                        fullWidth
                        className={classes.TextField}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.Button}
                    >
                        Send
                    </Button>
                </form>
            </Grid>
        ) : null
        return (
            chatMarkupForm
        )
    }
}
ChatForm.propTypes = {
    submitChat: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    authenticated: PropTypes.bool.isRequired
}
const mapStateToProps = state => ({
    UI: state.UI,
    authenticated: state.user.authenticated
});
export default connect(mapStateToProps, {submitChat})(withStyles(styles)(ChatForm))