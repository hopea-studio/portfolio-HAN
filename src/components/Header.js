import React from "react"
import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useSpring, a } from "react-spring"
import Link from "./Link"

const useStyles = makeStyles((theme) => ({
  header: {
    borderBottom: "1px solid black",
  },
}))

const Header = () => {
  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 800,
  })
  const classes = useStyles()

  return (
    <Box
      py={2}
      className={classes.header}
      display="flex"
      justifyContent="center"
    >
      <a.div style={fade}>
        <Typography variant="h1" component={Link} to={"/"}>
          Tingjun Han
        </Typography>
      </a.div>
    </Box>
  )
}

export default Header
