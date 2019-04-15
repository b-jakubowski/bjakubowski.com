import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import { graphql } from 'gatsby'
import PreviousNextPost from '../components/previous-next-post';
import MetaTags from '../components/Metatags';

function BlogPost(props) {
	const url = props.data.site.siteMetadata.siteUrl;
	const thumbnail = props.data.markdownRemark.frontmatter.image &&
		props.data.markdownRemark.frontmatter.image.childImageSharp.resize.src;
	const post = props.data.markdownRemark;
	const { title, date, image, tags } = post.frontmatter;
	const { prev, next } = props.pageContext;

	return (
		<Layout>
			<MetaTags
				title={title}
				description={props.data.markdownRemark.excerpt}
				thumbnail={thumbnail && url + thumbnail}
				url={url}
				pathname={props.location.pathname}
			/>
			<div>
				{image && <Img fluid={image.childImageSharp.fluid} />}
				<h1>{title}</h1>
				<h3>{date}</h3>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
				<div>
					<span>Tagged in </span>
					{tags.map((tag: string, i: number) => (
						<a href={`/${tag}`} key={i} style={{ marginLeft: "10px" }} >{tag}</a>
					))}
				</div>
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
				tags
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
	site {
		siteMetadata {
				siteUrl
			}
	}
}
`