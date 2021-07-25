import React from "react"
import { Link } from "gatsby"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import { Box } from "@material-ui/core"

import Logo from "./logo"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    background: "white",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    marginLeft: 0,
  },
  linkBtn: {
    margin: "0 1em",
  },
  linkBtnText: {
    textDecoration: "none",
    color: "grey",
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="relative" elevation={0} className={classes.appBar}>
        <nav>
          <Box
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            paddingTop="1rem"
          >
            <div className={clsx(classes.logo)}>
              <Logo />
            </div>
            <Link to="/" className={classes.linkBtnText}>
              <Button variant="text" className={classes.linkBtn}>
                Blog
              </Button>
            </Link>
            <Link to="/notebooks" className={classes.linkBtnText}>
              <Button
                variant="text"
                color="secondary"
                className={classes.linkBtn}
              >
                Notebooks
              </Button>
            </Link>
            <Link to="/tags" className={classes.linkBtnText}>
              <Button variant="text" className={classes.linkBtn}>
                Tags
              </Button>
            </Link>
          </Box>
        </nav>
      </AppBar>
    </div>
  )
}

export default Header
