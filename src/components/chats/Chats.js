import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

//MUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  ...theme.spreadThis,
  chatImage: {
    maxWidth: "100%",
    height: 100,
    objectFit: "cover",
    borderRadius: "50%",
  },
  chatData: {
    marginLeft: 20,
  },
});
class Chats extends Component {
  render() {
    const { chats, classes } = this.props;
    return (
      <Grid container>
        {chats.map((chat, index) => {
          const { body, createdAt, userHandle, userImage } = chat;
          return (
            <Fragment key={createdAt}>
              <Grid item sm={12}>
                <Grid container>
                  <Grid item sm={2}>
                    <img
                      src={userImage}
                      alt="chat"
                      className={classes.chatImage}
                    />
                  </Grid>
                  <Grid item sm={9}>
                    <div className={classes.chatData}>
                      <Typography
                        variant="h5"
                        component={Link}
                        to={`/users/${userHandle}`}
                        color="primary"
                      >
                        {userHandle}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {dayjs(createdAt).format("h:mm a, MMMM DD YYYY")}
                      </Typography>
                      <hr className={classes.invisibleSeperator} />
                      <Typography variant="body1">{body}</Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Fragment>
          );
        })}
      </Grid>
    );
  }
}
Chats.propTypes = {
    chats: PropTypes.array.isRequired
}
export default withStyles(styles)(Chats)