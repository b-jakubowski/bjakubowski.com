import React from "react";
import { Link, graphql } from "gatsby";
import Img from 'gatsby-image';

import Layout from '../components/layout';
import { MuiThemeProvider } from "@material-ui/core";
import theme from '../theme';

const IndexPage = (props: { data: { allMarkdownRemark: any; }; }) => {
	const postList = props.data.allMarkdownRemark;
	return (
		<MuiThemeProvider theme={theme}>
			<Layout>
				{postList.edges.map(({ node }, i: number) => (
					<Link to={node.fields.slug} key={i} className="link" >
						<div className="link" >
							<Img fluid={node.frontmatter.image.childImageSharp.fluid} />
							<h1>{node.frontmatter.title}</h1>
							<span>{node.frontmatter.date}</span>
							<p>{node.excerpt}</p>
						</div>
					</Link>
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
