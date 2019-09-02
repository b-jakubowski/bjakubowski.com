import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby'
import { MuiThemeProvider, Fab } from '@material-ui/core';
import PreviousNextPost from '../components/previous-next-post';
import MetaTags from '../components/Metatags';
import theme from '../theme';

const styles = {
	blogPostTitle: {
		color: theme.palette.primary.dark,
		fontWeight: 700,
		marginTop: '1em',
		marginBottom: '0.2em',
		textAlign: 'center'
	},
	blogPostDate: {
		color: theme.palette.primary.main,
		textAlign: 'center'
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
		fontSize: '0.8em'
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
				<MetaTags
					title={title}
					description={props.data.markdownRemark.excerpt}
					thumbnail={thumbnail && url + thumbnail}
					url={url}
					pathname={props.location.pathname}
				/>
				<article>
					<header>
						{image && <Img fluid={image.childImageSharp.fluid} />}
						<h1 style={styles.blogPostTitle}>{title}</h1>
						<h5 style={styles.blogPostDate}>{dateFormatted}</h5>
						<div style={styles.blogPostTags}>
							{tags.map((tag, i) => (
								<Link to={`/${tag}`} style={styles.blogPostTagText} key={i}>
									<Fab variant="extended" style={styles.blogPostTag} color="secondary">
										{tag}
									</Fab>
								</Link>
							))}
						</div>
					</header>
					<div dangerouslySetInnerHTML={{ __html: post.html }} />
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
