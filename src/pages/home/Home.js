import React from "react";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

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

      <Box display="flex" flexDirection={"column"}>
        <Box >
          <Typography align='center' variant='h1' color='primary'>Welcome</Typography>
        </Box>
        <Box>
          <Typography align='center' variant='h3' color='secondary'>And</Typography>
        </Box>
        <Box display='flex' justifyContent='center'>
          <Button size='large' variant='contained' color='primary' href='/talk'>Get Started</Button>
        </Box>
      </Box>

    </Grid>
  )
}

export default Home;