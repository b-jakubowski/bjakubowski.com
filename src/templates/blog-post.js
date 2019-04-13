import React from 'react';
import Layout from '../components/layout';

function BlogPost(props) {
	const post = props.data.markdownRemark;
	const { title, date } = post.frontmatter;
	console.log(post);
	return (
		<Layout>
			<div>
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
						image
				}
		}
	}
`;