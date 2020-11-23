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
//import AvatarImg from "../images/Avatar.jpg"
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined"
import PermIdentityIcon from "@material-ui/icons/PermIdentity"
//import Image from "gatsby-image"
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
  card: {
    //backgroundColor: theme.palette.grey[50],
    maxHeight: 440,
    //border: "1px solid black",
  },
  title: {
    height: "45%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: "1",
  },
  image: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    paddingBottom: theme.spacing(1),
  },
}))

const Hero = (props) => {
  const {
    about: { nodes: about },
  } = props.data

  const classes = useStyles()

  //here the item property has to be added, as it has a parent Grid container
  return (
    <Box className={classes.hero}>
      <Grid container spacing={2} id="hero">
        <Grid item container lg={6}>
          <Grid
            lg={8}
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.card}
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
          <Grid
            item
            container
            lg={4}
            direction="column"
            className={classes.card}
          >
            <Grid item>
              <img
                className={classes.image}
                src={specialities}
                alt="specialities"
              />
              <Typography variant="h5">SPECIALITIES</Typography>
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
        </Grid>
        <Grid item container lg={6}>
          <Grid
            item
            container
            lg={4}
            direction="column"
            className={classes.card}
          >
            <Grid item>
              <img className={classes.image} src={knowledge} alt="knowledge" />
              <Typography variant="h5">KNOWLEDGE</Typography>
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
                  <Typography>{item}</Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            container
            lg={8}
            direction="column"
            className={classes.card}
            wrap="nowrap"
          >
            <Grid item>
              <img className={classes.image} src={software} alt="software" />
              <Typography variant="h5">SOTWARES</Typography>
            </Grid>
            <Grid item container justify="space-between">
              {data.softwares.map((item, index) => (
                <Box
                  height="25%"
                  key={index}
                  display="flex"
                  width="50%"
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

        <Grid item container lg={8} spacing={2} justify="center"></Grid>
      </Grid>
    </Box>
  )
}

export default Hero
