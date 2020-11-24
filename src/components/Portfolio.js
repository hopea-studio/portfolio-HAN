import { Box, Button, Chip, Grid, Typography } from "@material-ui/core"
import React from "react"
import Link from "./Link"
//import Image from "gatsby-image"

const Portfolio = (props) => {
  const {
    recent: { nodes: recent },
  } = props.data

  return (
    <Box id="portfolio" py={12} display="flex" justifyContent="center">
      <Grid
        container
        direction="column"
        xs={11}
        md={10}
        lg={8}
        xl={7}
        spacing={10}
      >
        {recent.map((i) => {
          return (
            <Grid item container key={i.id} spacing={6}>
              <Grid item lg={4} md={6} xs={12} container justify="center">
                <video autoPlay loop muted playsInline>
                  <source src={i.cover.file.url} type="video/mp4" />
                </video>
                {/* <Image fluid={i.cover.fluid} className={classes.cover} /> */}
              </Grid>
              <Grid item container lg={8} md={6} xs={12} direction="column">
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Typography gutterBottom variant="subtitle1">
                      2020
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5">{i.title}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      {i.intro.internal.content}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{i.detail.internal.content}</Typography>
                  </Grid>
                  <Grid item container spacing={1}>
                    {i.skills.map((i) => {
                      return (
                        <Grid item key={i}>
                          <Chip
                            label={i}
                            color="primary"
                            size="small"
                            variant="outlined"
                          ></Chip>
                        </Grid>
                      )
                    })}
                  </Grid>
                  <Grid item container justify="flex-end">
                    <Button>
                      <Link to={`/portfolios/${i.Slug}`}>Gallary</Link>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )
        })}
        <Grid item container justify="center">
          <Button>
            <Link to="/portfolios/"> See the full list of Projects</Link>
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Portfolio
