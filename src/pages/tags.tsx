import React from 'react';
import { Link, graphql } from "gatsby"
import Layout from '../components/layout';
import { MuiThemeProvider } from "@material-ui/core";
import theme from '../theme';

function TagsPage(props) {
	const data = props.data.allMarkdownRemark.group

	return (
		<MuiThemeProvider theme={theme}>
			<Layout>
				<div className="tags">
					<h1>All tags</h1>
					{
						data.map(tag => (
							<Link to={`/${tag.fieldValue}`} >
								{tag.fieldValue} {`(${tag.totalCount})`}
							</Link>
						))
					}
				</div>
			</Layout>
		</MuiThemeProvider>
	)
}

export default TagsPage;

export const pageQuery = graphql`
	query {
		allMarkdownRemark(
			limit: 2000) {
			group(field: frontmatter___tags) {
				fieldValue
				totalCount
			}
		}
	}
`