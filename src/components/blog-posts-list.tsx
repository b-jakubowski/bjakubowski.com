import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";
import './blog-posts-list.scss';
import theme from '../theme';

const blogPost = {
	marginBottom: '3em'
};

const blogPostTitle = {
	color: theme.palette.secondary.dark,
	fontSize: '2em',
	fontWeight: 700,
	marginBottom: '0.1em',
	textAlign: 'center'
};

const blogPostDate = {
	color: theme.palette.primary.main,
	textAlign: 'center',
	fontWeight: 500,
	marginBottom: '1em'
};

const blogPostExcerpt = {
	paddingBottom: '1.5em'
};

const BlogPostsList = ({ node }) => {
	return (
		<Link to={node.fields.slug} style={{ textDecoration: 'none' }}>
			<Card style={blogPost} className="blog-post">
				<Img fluid={node.frontmatter.image.childImageSharp.fluid} />
				<CardContent>
					<Typography gutterBottom component="h2" style={blogPostTitle}>
						{node.frontmatter.title}
					</Typography>
					<Typography gutterBottom component="p" style={blogPostDate}>
						{node.frontmatter.date}
					</Typography>
					<Typography component="p" style={blogPostExcerpt}>
						{node.excerpt}
					</Typography>
				</CardContent>
			</Card>
		</Link>
	)
}

export default BlogPostsList
