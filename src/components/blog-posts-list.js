import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";
import Radium from 'radium';
import theme from '../theme';

const styles = {
	link: {
		textDecoration: 'none',
	},
	blogPostCard: {
		margin: '0 1em 2em'
	},
	blogPost: {
		':hover': {
			backgroundColor: 'rgba(48, 63, 159, 0.15)'
		}
	},
	blogPostImg: {
		height: '150px',
		borderBottom: `2px solid ${theme.palette.secondary.main}`
	},
	blogPostTitle: {
		color: theme.palette.secondary.dark,
		fontSize: '1.5em',
		fontWeight: 700,
		marginBottom: '0.1em',
		textAlign: 'center',
		':hover': {
			textDecoration: 'underline'
		}
	},
	blogPostDate: {
		color: theme.palette.primary.main,
		marginBottom: '1em',
		textAlign: 'center',
		fontWeight: 500,
		fontFamily: 'Cormorant Infant',
		fontSize: '1.3em',
	},
	blogPostExcerpt: {
		paddingBottom: '0.5em',
		fontFamily: 'ABeeZee'
	}
}

const BlogPostsList = ({ node }) => {
	const postSlug = node.fields.slug;
	const postImg = node.frontmatter.image.childImageSharp.fluid;
	const postTitle = node.frontmatter.title;
	const postDate = node.frontmatter.date;
	const postExcerpt = node.excerpt;

	return (
		<Link to={postSlug} style={styles.link}>
			<Card style={styles.blogPostCard}>
				<article style={styles.blogPost}>
					<Img fluid={postImg} style={styles.blogPostImg} />
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
