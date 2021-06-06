import { Link } from 'gatsby';
// import Img from 'gatsby-image';
import React from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";
import Radium from 'radium';
import theme from '../theme';

const styles = {
	link: {
		textDecoration: 'none',
	},
	blogPostCard: {
		margin: '0 1em 2em',
		boxShadow: 'none'
	},
	blogPostImg: {
		height: '150px',
	},
	blogPostTitle: {
		fontFamily: 'Rubik',
		fontSize: '2em',
		fontWeight: 700,
		marginTop: '0.3em',
		marginBottom: '0.3em',
		textAlign: 'center',
		':hover': {
			textDecoration: 'underline'
		}
	},
	blogPostDate: {
		color: theme.palette.primary.main,
		marginBottom: '1em',
		fontFamily: 'Roboto',
		textAlign: 'center',
		fontWeight: 500,
		fontSize: '1em',
	},
	blogPostExcerpt: {
		paddingBottom: '0.5em',
		fontFamily: 'Roboto',
		fontSize: '1em'
	}
}

const BlogPostsList = ({ node }) => {
	const postSlug = node.fields.slug;
	// const postImg = node.frontmatter.image.childImageSharp.fluid;
	const postTitle = node.frontmatter.title;
	const postDate = node.frontmatter.date;
	const postExcerpt = node.excerpt;

	return (
		<Link to={postSlug} style={styles.link}>
			<Card style={styles.blogPostCard}>
				<article style={styles.blogPost}>
					{/* <Img fluid={postImg} style={styles.blogPostImg} /> */}
					<CardContent>
						<h2 style={styles.blogPostTitle} key={postTitle}>
							{postTitle}
						</h2>
						<Typography gutterBottom component="p" style={styles.blogPostDate}>
							{postDate}
						</Typography>
						<Typography component="p" style={styles.blogPostExcerpt}>
							{postExcerpt}
						</Typography>
					</CardContent>
				</article>
			</Card>
		</Link>
	)
}

export default Radium(BlogPostsList);
