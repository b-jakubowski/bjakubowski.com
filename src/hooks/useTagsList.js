import {graphql, useStaticQuery} from "gatsby"

const useTagsList = () => {
	const data = useStaticQuery(graphql`
	query {
		allMarkdownRemark(
			limit: 2000) {
			group(field: frontmatter___tags) {
				fieldValue
				totalCount
			}
		}
	}
`);

	return data.allMarkdownRemark.group;
}

export default useTagsList;