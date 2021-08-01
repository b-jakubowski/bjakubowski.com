import React from "react"
import { Grid, MuiThemeProvider } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import Layout from "../components/layout"
import theme from "../theme"
import { NotebookTile } from "../components/notebook-tile"

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
          <h1>Notebooks</h1>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12} sm={6}>
              <NotebookTile
                link="/tools"
                title="Tools"
                text="Tools i use regularly and which work for me. Also a
                      reminder to myself that some tools exist and solve
                      specific problems."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <NotebookTile
                link="/my-react-wiki"
                title="React Notebook"
                text="My notes on React"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <NotebookTile
                link="/health-notes"
                title="Health Notes"
                text="Notes, thoughts and health practices that work for me"
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <NotebookTile
                link="/health-notes"
                title="Health"
                text="Notes on health, habits, suplements and exercises"
              />
            </Grid> */}
          </Grid>
        </div>
      </Layout>
    </MuiThemeProvider>
  )
}

export default TagsPage
