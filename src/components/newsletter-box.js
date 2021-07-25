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
import { useFormik } from "formik"
import * as yup from "yup"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { NewsletterSuccess } from "./newsletter-success"

const NewsletterSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  name: yup.string().min(1).required("Name is required"),
})

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
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async ({ email, name }) => {
    try {
      await addToMailchimp(email, { FNAME: name })
      setSuccess(true)
    } catch (error) {
      setError(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: NewsletterSchema,
    onSubmit: handleSubmit,
  })

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {success && <NewsletterSuccess />}
        {!success && (
          <>
            <Avatar className={classes.avatar}>
              <MailOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Subsribe to newsletter
            </Typography>
            <Typography component="p" variant="caption" color="inherit">
              I will occasionally send info about new articles, things I am
              interested in and cool random stuff
            </Typography>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="name"
                label="Name"
                type="name"
                autoComplete="name"
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                onChange={formik.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                onChange={formik.handleChange}
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
            {error && (
              <Typography component="h2" variant="h5">
                Sorry, something went wrong when subscibing to newsletter
              </Typography>
            )}
          </>
        )}
      </div>
    </Container>
  )
}
