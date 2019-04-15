import React from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout';

function Tags(props: { data: { allMarkdownRemark: { edges: any; }; }; pageContext: { tag: any; }; }) {
	const posts = props.data.allMarkdownRemark.edges;
	const { tag } = props.pageContext;
	return (
		<Layout>
			<h1>{`Available posts  in ${tag}`}</h1>
			<div className="tags">
				{
					posts.map(({ node }: { node: { fields: any, frontmatter: any } }, index: number) => {
						return (
							<Link to={node.fields.slug} key={index} >
								{node.frontmatter.title}
							</Link>
						)
					})
				}
			</div>
		</Layout>
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