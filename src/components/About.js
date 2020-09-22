import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  card: {
    //backgroundColor: theme.palette.grey[50],
      height: 240,
  },
}))



const About = (props) => {

  const {
    about: { nodes: about },
  } = props.data

    const classes = useStyles()
    return (
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        md={10}
        spacing={4}
      >
        <Grid item>
          <Typography variant="h4">About Me</Typography>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item md={3} sm={6} xs={12}>
            <Paper elevation={1} className={classes.card}>
              {about[0].title}
            </Paper>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Paper elevation={2} className={classes.card}>
              Traits
            </Paper>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Paper elevation={3} className={classes.card}>
              Traits
            </Paper>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Paper elevation={0} className={classes.card}>
              Traits
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    )
}

export default About
