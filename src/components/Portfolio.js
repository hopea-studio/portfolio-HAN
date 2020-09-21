import { Grid, Paper, Typography } from "@material-ui/core"
import React from "react"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 100,
  },
  projects: {
      border: "2px solid grey",
      borderRadius: "10px",
  },
}))

const Portfolio = () => {
  const classes = useStyles()
  return (
    <Grid item container direction="column" alignItems="center" spacing={4}>
      <Grid item>
        <Typography variant="h4">Portfolio</Typography>
      </Grid>

      <Grid
        item
        container
        direction="column"
        spacing={2}
        xs={8}
        className={classes.projects}
      >
        <Grid item>
          <Paper className={classes.paper}>Project1</Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>Project1</Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>Project1</Paper>
        </Grid>
        <Grid item container justify="flex-end">
          <Grid item>Button 1</Grid>
          <Grid item>Button 2</Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Portfolio
