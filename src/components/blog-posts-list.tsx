import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from "@material-ui/core";
import './blog-posts-list.scss';

const BlogPostsList = ({ node }) => {
	return (
		<Link to={node.fields.slug} style={{ textDecoration: 'none' }}>
			<Card className="blog-post">
				<CardActionArea>
					<Img fluid={node.frontmatter.image.childImageSharp.fluid} />
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2" >
							{node.frontmatter.title}
						</Typography>
						<Typography gutterBottom variant="h6" component="h3">
							{node.frontmatter.date}
						</Typography>
						<Typography component="p">
							{node.excerpt}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
	)
}

export default BlogPostsList
