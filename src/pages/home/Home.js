import React from "react";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const Home = props => {

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100%' }}
    >

      <Grid item xs={3}>
        <Typography>Welcome</Typography>
        <Typography>And</Typography>
        <Button><Link to='/talk'>GetStarted</Link></Button>
      </Grid>

    </Grid>
  )
}

export default Home;