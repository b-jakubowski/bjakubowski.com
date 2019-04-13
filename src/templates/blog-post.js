import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import PreviousNextPost from '../components/previous-next-post';

function BlogPost(props) {
	const post = props.data.markdownRemark;
	const { title, date } = post.frontmatter;
	const { prev, next } = props.pageContext;

	return (
		<Layout>
			<div>
				<Img fluid={post.frontmatter.image.childImageSharp.fluid} />
				<h1>{title}</h1>
				<h3>{date}</h3>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
				<PreviousNextPost prev={prev && prev.node} next={next && next.node} />
			</div>
		</Layout>
	)
}

export default BlogPost;

export const query = graphql`
	query PostQuery($slug: String!) {
			markdownRemark(fields: { slug: { eq: $slug } }) {
				html
				excerpt
				frontmatter {
					title
					image {
						childImageSharp {
							resize(width: 1000, height: 420) {
								src
							}
							fluid(maxWidth: 786) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
		}
	}
`