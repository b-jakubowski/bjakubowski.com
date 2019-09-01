import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";
import theme from '../theme';

const styles = {
	blogPost: {
		margin: '0 1em 2em'
	},
	blogPostTitle: {
		color: theme.palette.secondary.dark,
		fontSize: '1.5em',
		fontWeight: 700,
		marginBottom: '0.1em',
		textAlign: 'center'
	},
	blogPostDate: {
		color: theme.palette.primary.main,
		textAlign: 'center',
		fontWeight: 500,
		marginBottom: '1em'
	},
	blogPostExcerpt: {
		paddingBottom: '0.5em'
	}
}

const BlogPostsList = ({ node }) => {
	const postSlug = node.fields.slug;
	const postImg = node.frontmatter.image.childImageSharp.fluid;
	const postTitle = node.frontmatter.title;
	const postDate = node.frontmatter.date;
	const postExcerpt = node.excerpt;

	return (
		<Link to={postSlug} style={{ textDecoration: 'none' }}>
			<Card style={styles.blogPost}>
				<article>
					<Img fluid={postImg} style={{ height: '150px' }} />
					<CardContent>
						<Typography gutterBottom component="h2" style={styles.blogPostTitle} >
							{postTitle}
						</Typography>
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

export default BlogPostsList
