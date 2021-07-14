import React from "react"
import { Link } from "gatsby"
import { Button, MuiThemeProvider } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import Layout from "../components/layout"
import theme from "../theme"
import useTagsList from "../hooks/useTagsList"

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
  tagsContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  tagBtn: {
    margin: "0.5em",
  },
}))

function TagsPage() {
  const tagsList = useTagsList()
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <div className={classes.container}>
          <h1>Categories</h1>
          <div className={classes.tagsContainer}>
            {tagsList.map((tag, index) => (
              <Link
                to={`/${tag.fieldValue}`}
                key={index}
                className={classes.linkBtnText}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.tagBtn}
                >
                  {tag.fieldValue} {`(${tag.totalCount})`}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    </MuiThemeProvider>
  )
}

export default TagsPage
