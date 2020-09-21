import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'

const Portfolio = () => {
    return (
      <Grid item container direction="column" alignItems="center" spacing={4}>
        <Grid item>
          <Typography variant="h4">Portfolio</Typography>
        </Grid>
        <Grid item>
          <Grid item container direction="column" spacing={2} xs={8}>
            <Grid item>
              <Paper>Project1</Paper>
            </Grid>
            <Grid item>
              <Paper>Project1</Paper>
            </Grid>
            <Grid item>
              <Paper>Project1</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
}

export default Portfolio
