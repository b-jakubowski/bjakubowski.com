import React from "react";
import { graphql } from "gatsby";

import Layout from '../components/layout';
import { MuiThemeProvider } from "@material-ui/core";
import theme from '../theme';
import BlogPostsList from "../components/blog-posts-list";

const IndexPage = (props) => {
	const postList = props.data.allMarkdownRemark;

	return (
		<MuiThemeProvider theme={theme}>
			<Layout>
				{postList.edges.map(({ node }, i) => (
					<BlogPostsList node={node} key={i} />
				))}
			</Layout>
		</MuiThemeProvider>
	)
}

export default IndexPage;


export const listQuery = graphql`
	query ListQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }){
			edges{
				node{
					frontmatter{
						title
						date(formatString: "MMMM Do YYYY")
						tags
						image {
							childImageSharp {
								resize(width: 1500, height: 1500) {
									src
								}
								fluid(maxWidth: 786) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					excerpt(pruneLength: 250)
					fields{
						slug
					}
				}
			}
		}
	}
`
