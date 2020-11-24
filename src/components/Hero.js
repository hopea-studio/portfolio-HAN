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
import AvatarImg from "../images/avatar.jpg"
import Image from "gatsby-image"

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />
}

const useStyles = makeStyles((theme) => ({
  hero: {
    borderBottom: "1px solid black",
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(2),
    border: "1px solid grey",
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
    <Box
      className={classes.hero}
      display="flex"
      justifyContent="center"
      py={15}
    >
      <Grid container id="hero" spacing={4} xs={11} lg={10} xl={12} md={11}>
        <Grid
          xs={12}
          xl={4}
          item
          container
          direction="column"
          alignItems="center"
        >
          <Grid item>
            <Avatar className={classes.avatar} src={AvatarImg}></Avatar>
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
          lg={3}
          md={3}
          xl={2}
          sm={6}
          direction="column"
          justify="flex-end"
        >
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
          <Grid item container direction="column">
            {data.specialities.map((item, index) => (
              <Grid item key={index}>
                <Typography gutterBottom>{item}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          container
          lg={3}
          md={3}
          xl={2}
          sm={6}
          justify="flex-end"
          direction="column"
        >
          <Grid item>
            <img className={classes.image} src={knowledge} alt="knowledge" />
            <Typography paragraph variant="h5">
              KNOWLEDGE
            </Typography>
          </Grid>
          <Grid item container direction="column">
            {data.knowledge.map((item, index) => (
              <Grid item key={index}>
                <Typography gutterBottom> {item}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          container
          lg={6}
          md={6}
          xl={4}
          sm={10}
          direction="column"
          wrap="nowrap"
          justify="flex-end"
        >
          <Grid item>
            <img className={classes.image} src={software} alt="software" />
            <Typography paragraph variant="h5">
              SOFTWARES
            </Typography>
          </Grid>
          <Grid item container>
            <Grid item container direction="column" lg={6}>
              {data.softwares
                .filter((item, index) => index < 7)
                .map((item, index) => (
                  <Grid item key={index} container alignItems="center">
                    <Box width="50%" display="flex">
                      <Typography gutterBottom>{item[0]}</Typography>
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
                  </Grid>
                ))}
            </Grid>
            <Grid item container direction="column" lg={6}>
              {data.softwares
                .filter((item, index) => index > 6)
                .map((item, index) => (
                  <Grid item key={index} container alignItems="center">
                    <Box width="50%" display="flex">
                      <Typography gutterBottom>{item[0]}</Typography>
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
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Hero
