import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/layout';

function BlogPost(props) {
	const post = props.data.markdownRemark;
	const { title, date } = post.frontmatter;

	return (
		<Layout>
			<div>
				<Img fluid={post.frontmatter.image.childImageSharp.fluid} />
				<h1>{title}</h1>
				<h3>{date}</h3>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
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
								resize(width: 1500, height: 1500) {
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
`;