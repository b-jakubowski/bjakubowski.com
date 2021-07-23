import { Card, CardContent, makeStyles, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"

const useStyles = makeStyles(() => ({
  card: {
    height: "12rem",
  },
  linkBtnText: {
    textDecoration: "none",
    color: "grey",
  },
}))

export const NotebookTile = ({ title, text, link }) => {
  const classes = useStyles()

  return (
    <Link to={link} className={classes.linkBtnText}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" component="h2">
            {title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}
