import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  header: {
   padding: theme.spacing(2)
  }
}))

const Layout = ({ children }) => {
    
    const classes = useStyles()

    return (
      <Container maxWidth="xl">
        <Grid container justify="center">
          <Grid item className={classes.header}>
            <Typography variant="h2">Tingjun Han</Typography>
          </Grid>
        </Grid>
        <Grid container direction="column" alignItems='center' spacing={10}>
          {children}
        </Grid>
      </Container>
    )
}

export default Layout
