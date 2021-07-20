import React from "react"
import { Link } from "gatsby"
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import Layout from "../components/layout"
import theme from "../theme"

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "1em",
    backgroundColor: "white",
    minHeight: "25em",
  },
  linkBtnText: {
    textDecoration: "none",
    color: "grey",
  },
}))

function TagsPage() {
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <div className={classes.container}>
          <h1>Handbooks</h1>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12} sm={6}>
              <Link to="/tools" className={classes.linkBtnText}>
                <Card className={classes.root}>
                  <CardContent>
                    <Typography variant="h4" component="h2">
                      Tools
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      Tools i use regularly and which work for me. Also a
                      reminder to myself that some tools exist and solve
                      specific problems.
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Link to="/tools" className={classes.linkBtnText}>
                <Card className={classes.root}>
                  <CardContent>
                    <Typography variant="h4" component="h2">
                      Tools
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      Tools i use regularly and which work for me. Also a
                      reminder to myself that some tools exist and solve
                      specific problems.
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Layout>
    </MuiThemeProvider>
  )
}

export default TagsPage
