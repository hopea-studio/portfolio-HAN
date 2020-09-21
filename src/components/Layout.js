import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'

const Layout = ({children}) => {
    return (
        <Container maxWidth='lg'>
            <Grid container justify="center">
                <Grid item>
                    <Typography variant='h2'>Tingjun Han</Typography>
                </Grid>
            </Grid>
            <Grid container>
            {children}
            </Grid>
        </Container>
    )
}

export default Layout
