import {graphql, useStaticQuery} from "gatsby"

const useBlogPostList = () => {
	const data = useStaticQuery(graphql`
		query ListQuery{
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
	`);

	return data.allMarkdownRemark;
}

export default useBlogPostList;