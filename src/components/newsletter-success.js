import React from "react"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import { Typography } from "@material-ui/core"

export const NewsletterSuccess = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "1rem",
      }}
    >
      <CheckCircleIcon fontSize="large" color="secondary" />
      <Typography
        component="h2"
        variant="h5"
        align="center"
        style={{ margin: "2rem 0 3rem 0" }}
      >
        Thanks for joining awesome newsletter! We'll be in touch
      </Typography>
    </div>
  )
}
