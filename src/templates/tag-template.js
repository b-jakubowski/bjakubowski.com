import React from 'react';
import { Link, graphql } from 'gatsby'
import { MuiThemeProvider } from '@material-ui/core';
import Layout from '../components/layout';
import theme from '../theme';
import Button from "@material-ui/core/Button"

const styles = {
	container: {
		padding: '1em',
		backgroundColor: 'white',
		minHeight: '25em'
	},
	tagsContainer: {
		display: 'flex',
		flexDirection: 'column'
	},
	blogPostTagText: {
		textDecoration: 'none',
		color: 'white',
		fontSize: '0.8em',
		marginBottom: '1em'
	},
	blogPostTag: {
		marginRight: '1em',
		height: '2.5em'
	}
}

function Tags(props) {
	const posts = props.data.allMarkdownRemark.edges;
	const { tag } = props.pageContext;
	return (
		<MuiThemeProvider theme={theme}>
			<Layout>
				<div style={styles.container}>
					<h1>{`Available posts  in '${tag}' tag`}</h1>
					<div style={styles.tagsContainer}>
						{
							posts.map(({ node }, index) => {
								return (
									<Link to={node.fields.slug} key={index} style={styles.blogPostTagText}>
										<Button variant="outlined" key={index} style={styles.blogPostTag} color="secondary">
											{node.frontmatter.title}
										</Button>
									</Link>
								)
							})
						}
					</div>
				</div>
			</Layout>
		</MuiThemeProvider>
	)
}

export default Tags;

export const query = graphql`
 query TagsQuery($tag: String!) {
	allMarkdownRemark(
		limit: 2000
		sort: { fields: [frontmatter___date], order: DESC }
		filter: { frontmatter: { tags: { eq: $tag } } }
	) {
			edges {
				node {
					frontmatter {
						title
					}
					fields {
						slug
					}
				}
			}
		}
	}
`
