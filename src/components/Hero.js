import {
  Grid,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@material-ui/core"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined"
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
import { data } from "./skillData"
import specialities from "../images/specialities.svg"
import knowledge from "../images/knowledge.svg"
import software from "../images/software.svg"
import { grey } from "@material-ui/core/colors"

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />
}

const useStyles = makeStyles((theme) => ({
  hero: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    borderBottom: "1px solid black",
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(2),
    border: "1px solid black",
  },
  image: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    paddingBottom: theme.spacing(1),
  },
}))

const Hero = () => {
  const classes = useStyles()

  return (
    <Box className={classes.hero}>
      <Grid container id="hero">
        <Grid
          xs={12}
          xl={4}
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Avatar className={classes.avatar}></Avatar>
          </Grid>
          <Grid item>
            <List dense>
              <ListItem>
                <ListItemIcon></ListItemIcon>
                <ListItemText>
                  <Typography variant="h5">Tingjun Han</Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PermIdentityIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography>UI / UX Designer</Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnOutlinedIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography>NS, CANADA</Typography>
                </ListItemText>
              </ListItem>
              <ListItemLink href="mailto:su2047@gmail.com" target="_blank">
                <ListItemIcon>
                  <MailOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography>lamorthan@gmail.com</Typography>
                </ListItemText>
              </ListItemLink>
            </List>
          </Grid>
        </Grid>
        <Grid item container lg={3} xl={2} direction="column">
          <Grid item>
            <img
              className={classes.image}
              src={specialities}
              alt="specialities"
            />
            <Typography paragraph variant="h5">
              SPECIALITIES
            </Typography>
          </Grid>

          <Grid item container justify="space-between">
            {data.specialities.map((item, index) => (
              <Box
                display="flex"
                width="100%"
                height="25%"
                key={index}
                alignItems="center"
              >
                <Typography>{item}</Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
        <Grid item container lg={3} xl={2} direction="column">
          <Grid item>
            <img className={classes.image} src={knowledge} alt="knowledge" />
            <Typography paragraph variant="h5">
              KNOWLEDGE
            </Typography>
          </Grid>
          <Grid item container justify="space-between">
            {data.knowledge.map((item, index) => (
              <Box
                display="flex"
                width="100%"
                height="25%"
                key={index}
                alignItems="center"
              >
                <Typography> {item}</Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
        <Grid item container lg={6} xl={4} direction="column" wrap="nowrap">
          <Grid item>
            <img className={classes.image} src={software} alt="software" />
            <Typography paragraph variant="h5">
              SOFTWARES
            </Typography>
          </Grid>
          <Grid item container justify="space-between">
            {data.softwares.map((item, index) => (
              <Box
                height="25%"
                key={index}
                display="flex"
                minWidth="50%"
                alignItems="center"
              >
                <Box width="50%" display="flex" alignItems="center">
                  <Typography>{item[0]}</Typography>
                </Box>
                <Box width="40%" display="flex" height="4px">
                  <Box
                    width={`${item[1]}%`}
                    border={`2px solid ${grey[900]}`}
                  ></Box>
                  <Box
                    width={`${100 - item[1]}%`}
                    border={`2px solid ${grey[300]}`}
                  ></Box>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Hero
