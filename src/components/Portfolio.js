import { Box, Button, Chip, Grid, Typography } from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Link from "./Link"
//import Image from "gatsby-image"

const useStyles = makeStyles((theme) => ({
  cover: {
    width: 300,
    height: 300,
  },
  chip: {
    fontSize: "0.75rem",
    marginRight: "2px",
  },
  right: {
    padding: theme.spacing(1),
    border: "1px solid red",
  },
}))

const Portfolio = (props) => {
  const classes = useStyles()

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
                <Box>
                  <Grid container direction="column" spacing={2}>
                    <Typography gutterBottom variant="subtitle1">
                      2020
                    </Typography>
                    <Grid item>
                      <Typography>{i.title}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">
                        {i.intro.internal.content}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{i.detail.internal.content}</Typography>
                    </Grid>
                    <Grid item>
                      {i.skills.map((i) => {
                        return (
                          <Chip
                            key={i}
                            className={classes.chip}
                            label={i}
                            color="primary"
                            size="small"
                            variant="outlined"
                          ></Chip>
                        )
                      })}
                    </Grid>
                    <Grid item>
                      <Button variant="outlined">
                        <Link to={`/portfolios/${i.Slug}`}>Gallary</Link>
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          )
        })}
        <Grid item container justify="center">
          <Grid item>
            <Button variant="outlined">
              <Link to="/portfolios/"> Get a full list of the portfolio</Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Portfolio
