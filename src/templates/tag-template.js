import React from 'react';
import { Link, graphql } from 'gatsby'
import { MuiThemeProvider } from '@material-ui/core';
import Layout from '../components/layout';
import theme from '../theme';

function Tags(props) {
	const posts = props.data.allMarkdownRemark.edges;
	const { tag } = props.pageContext;
	return (
		<MuiThemeProvider theme={theme}>
			<Layout>
				<h1>{`Available posts  in ${tag}`}</h1>
				<div className="tags">
					{
						posts.map(({ node }, index) => {
							return (
								<Link to={node.fields.slug} key={index} >
									{node.frontmatter.title}
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
