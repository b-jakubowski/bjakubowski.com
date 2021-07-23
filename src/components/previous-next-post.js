import React from "react"
import { Button, Tooltip } from "@material-ui/core"
import { Link } from "gatsby"

const styles = {
  buttonText: {
    textDecoration: "none",
    color: "white",
  },
  buttonContainer: {
    display: "flex",
    width: "100%",
  },
}

const PreviousNextPost = (props) => {
  const { prev, next } = props

  return (
    <footer style={{ display: "flex", marginTop: "4em" }}>
      {prev && (
        <div style={styles.buttonContainer}>
          <Tooltip title={prev.frontmatter.title}>
            <Link to={prev.fields.slug} style={styles.buttonText}>
              <Button variant="outlined">
                <span className="material-icons">keyboard_arrow_left</span>
                Prev post
              </Button>
            </Link>
          </Tooltip>
        </div>
      )}
      {next && (
        <div style={styles.buttonContainer}>
          <div style={{ flexGrow: 1 }}></div>
          <Tooltip title={next.frontmatter.title}>
            <Link to={next.fields.slug} style={styles.buttonText}>
              <Button variant="outlined">
                Next post
                <span className="material-icons">keyboard_arrow_right</span>
              </Button>
            </Link>
          </Tooltip>
        </div>
      )}
    </footer>
  )
}

export default PreviousNextPost
