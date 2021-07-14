import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import {
  MuiThemeProvider,
  Button,
  Typography,
  TextField,
  Paper,
  Grid,
} from "@material-ui/core"
import PreviousNextPost from "../components/previous-next-post"
import Metatags from "../components/metatags"
import theme from "../theme"
import addToMailchimp from "gatsby-plugin-mailchimp"

const styles = {
  container: {
    padding: "1em",
    backgroundColor: "white",
    marginBottom: "5em",
  },
  blogPostTitle: {
    color: theme.palette.primary.dark,
    fontFamily: "Rubik",
    fontWeight: 700,
    marginTop: "1em",
    marginBottom: "0.2em",
    textAlign: "center",
  },
  blogPostDate: {
    color: theme.palette.primary.main,
    fontFamily: "Rubik",
    textAlign: "center",
  },
  blogPostTags: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "2em",
  },
  blogPostTag: {
    marginRight: "1em",
    height: "2.5em",
  },
  blogPostTagText: {
    textDecoration: "none",
    color: "white",
    fontSize: "0.8em",
  },
  blogPostContent: {
    fontFamily: "Roboto",
    fontSize: "1.15em",
    lineHeight: "1.6em",
  },
}

function BlogPost(props) {
  const url = props.data.site.siteMetadata.siteUrl
  const thumbnail =
    props.data.markdownRemark.frontmatter.image &&
    props.data.markdownRemark.frontmatter.image.childImageSharp.resize.src
  const post = props.data.markdownRemark
  const { title, date, image, tags } = post.frontmatter
  const { prev, next } = props.pageContext

  const dateFormatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <Metatags
          title={title}
          description={props.data.markdownRemark.excerpt}
          thumbnail={thumbnail && url + thumbnail}
          url={url}
          pathname={props.location.pathname}
        />
        <article style={styles.container}>
          <header>
            {image && <Img fluid={image.childImageSharp.fluid} />}
            <h1 style={styles.blogPostTitle}>{title}</h1>
            <h4 style={styles.blogPostDate}>{dateFormatted}</h4>
            <div style={styles.blogPostTags}>
              {tags.map((tag, i) => (
                <Link to={`/${tag}`} style={styles.blogPostTagText} key={i}>
                  <Button
                    variant="outlined"
                    style={styles.blogPostTag}
                    color="secondary"
                  >
                    {tag}
                  </Button>
                </Link>
              ))}
            </div>
          </header>
          <div
            style={styles.blogPostContent}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <PreviousNextPost prev={prev && prev.node} next={next && next.node} />
        </article>
        {/*  */}
        {/* <div>
					<form onSubmit={(e) => console.log(e.target.value)}>
						<Paper style={{ padding: '1.5em' }}>
							<div style={{ paddingTop: '1em', paddingBottom: '3em' }}>
								<Typography variant="h3" gutterBottom>Hey there!</Typography>
								<Typography>I will ocasionally send updates: New posts on blog, Tools I use and love, Health news I find interesting and
									Cool stuff I recommend. Lets stay in touch!</Typography>
							</div>
							<Grid container spacing={5}>
								<Grid item xs={12} sm={4} md={4}>
									<TextField
										id="outlined-error-helper-text"
										label="Name"
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={12} sm={5} md={5}>
									<TextField
										// error
										id="outlined-error-helper-text"
										label="Email"
										variant="outlined"
										email
									/>
								</Grid>
								<Grid item xs={4} sm={3} md={3}>
									<div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
										<Button type="submit" variant="contained" color="secondary">
											Subscribe
										</Button>
									</div>
								</Grid>
							</Grid>
						</Paper>
					</form>
				</div> */}
      </Layout>
    </MuiThemeProvider>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date
        tags
        image {
          childImageSharp {
            resize(width: 1000, height: 420) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
