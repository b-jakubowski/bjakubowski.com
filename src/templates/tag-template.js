import React from 'react';
import { Link, graphql } from 'gatsby'
import { MuiThemeProvider } from '@material-ui/core';
import Layout from '../components/layout';
import theme from '../theme';
import Button from "@material-ui/core/Button"
import config from '../config';

const styles = {
	tagsContainer: {
		display: 'flex',
		flexDirection: 'column',
		width: config.layout.width,
		padding: '1em',
		backgroundColor: 'white',
		minHeight: '400px'
	},
	title: {
		marginBottom: '1em',
		fontFamily: 'Rubik',
		textAlign: 'center'
	},
	blogPostTagBtn: {
		textDecoration: 'none',
		color: 'white',
		fontSize: '0.8em',
		marginBottom: '1em',
		display: 'flex',
		justifyContent: 'center'
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
				<div style={styles.tagsContainer}>
					<h1 style={styles.title}>{`Available posts  in '${tag}' tag`}</h1>
					{
						posts.map(({ node }, index) => {
							return (
								<Link to={node.fields.slug} key={index} style={styles.blogPostTagBtn}>
									<Button variant="outlined" key={index} style={styles.blogPostTag} color="secondary">
										{node.frontmatter.title}
									</Button>
								</Link>
							)
						})
					}
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
