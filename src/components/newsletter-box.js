import React, { useState } from "react"
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@material-ui/core"
import { MailOutlined } from "@material-ui/icons"
import { makeStyles } from "@material-ui/styles"
// import addToMailchimp from "gatsby-plugin-mailchimp"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export const NewsletterBox = () => {
  const classes = useStyles()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.warn("++++++++++ onSubmit", name, email)
  }

  const handleOnNameChange = ({ target: { value } }) => setName(value)

  const handleOnEmailChange = ({ target: { value } }) => setEmail(value)

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <MailOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Subsribe to newsletter
        </Typography>
        {/* TODO: Add description here */}
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="name"
            label="Name"
            type="name"
            autoComplete="name"
            onChange={handleOnNameChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleOnEmailChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Lets stay in touch!
          </Button>
        </form>
      </div>
    </Container>
  )
}
