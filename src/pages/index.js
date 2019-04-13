import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = (props) => {
	const postList = props.data.allMarkdownRemark;
	return (
		<Layout>
			{postList.edges.map(({ node }, i) => (
				<Link to={node.fields.slug} key={i} className="link" >
					<div className="link" >
						<h1>{node.frontmatter.title}</h1>
						<span>{node.frontmatter.date}</span>
						<p>{node.excerpt}</p>
					</div>
				</Link>
			))}
		</Layout>
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
