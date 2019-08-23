import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";
import theme from '../theme';

const blogPost = {
	margin: '0 1em 2em'
};

const blogPostTitle = {
	color: theme.palette.secondary.dark,
	fontSize: '1.5em',
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
	paddingBottom: '0.5em'
};

const BlogPostsList = ({ node }) => {
	return (
		<Link to={node.fields.slug} style={{ textDecoration: 'none' }}>
			<Card style={blogPost} className="blog-post">
				<Img fluid={node.frontmatter.image.childImageSharp.fluid} style={{ height: '150px' }} />
				<CardContent>
					<Typography gutterBottom component="h2" style={blogPostTitle} className="blog-post-title" >
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
