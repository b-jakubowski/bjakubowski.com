import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby'
import { MuiThemeProvider, Button } from '@material-ui/core';
import PreviousNextPost from '../components/previous-next-post';
// import Metatags from '../components/Metatags';
import theme from '../theme';
import config from "../config"

const styles = {
	container: {
    maxWidth: config.layout.width,
		padding: '1em',
		backgroundColor: 'white'
	},
	blogPostTitle: {
		color: theme.palette.primary.dark,
		fontFamily: 'Rubik',
		fontWeight: 700,
		marginTop: '1em',
		marginBottom: '0.2em',
		textAlign: 'center'
	},
	blogPostDate: {
		color: theme.palette.primary.main,
		fontFamily: 'Rubik',
		textAlign: 'center',
	},
	blogPostTags: {
		display: 'flex',
		justifyContent: 'center',
		marginBottom: '2em'
	},
	blogPostTag: {
		marginRight: '1em',
		height: '2.5em'
	},
	blogPostTagText: {
		textDecoration: 'none',
		color: 'white',
		fontSize: '0.8em',
	},
	blogPostContent: {
		fontFamily: 'Roboto',
		fontSize: '1.15em',
		lineHeight: '1.6em',
	}
}

function BlogPost(props) {
	const url = props.data.site.siteMetadata.siteUrl;
	const thumbnail = props.data.markdownRemark.frontmatter.image &&
		props.data.markdownRemark.frontmatter.image.childImageSharp.resize.src;
	const post = props.data.markdownRemark;
	const { title, date, image, tags } = post.frontmatter;
	const { prev, next } = props.pageContext;

	const dateFormatted = new Date(date).toLocaleDateString('en-US', {
		year: "numeric",
		month: "short",
		day: "numeric"
	});

	return (
		<MuiThemeProvider theme={theme}>
			<Layout>
				{/* <Metatags
					title={title}
					description={props.data.markdownRemark.excerpt}
					thumbnail={thumbnail && url + thumbnail}
					url={url}
					pathname={props.location.pathname}
				/> */}
				<article style={styles.container}>
					<header>
						{image && <Img fluid={image.childImageSharp.fluid} />}
						<h1 style={styles.blogPostTitle}>{title}</h1>
						<h4 style={styles.blogPostDate}>{dateFormatted}</h4>
						<div style={styles.blogPostTags}>
							{tags.map((tag, i) => (
								<Link to={`/${tag}`} style={styles.blogPostTagText} key={i}>
									<Button variant="outlined" style={styles.blogPostTag} color="secondary">
										{tag}
									</Button>
							</Link>
							))}
						</div>
					</header>
					<div style={styles.blogPostContent} dangerouslySetInnerHTML={{ __html: post.html }} />
					<PreviousNextPost prev={prev && prev.node} next={next && next.node} />
				</article>
			</Layout>
		</MuiThemeProvider>
	)
}

export default BlogPost;

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
