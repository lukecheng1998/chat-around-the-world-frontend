import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
const styles = (theme) => ({
  ...theme.spreadThis
})
export class home extends Component {
  
  render() {
    return (
      <div>
        <h1>
          " "
        </h1>
        <Typography variant="h1">
         Welcome to Chat Around the World!
        </Typography>
      </div>
    )
  }
}

export default home

