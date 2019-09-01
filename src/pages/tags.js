import React from 'react';
import { Link, graphql } from "gatsby"
import { MuiThemeProvider } from "@material-ui/core";

import Layout from '../components/layout';
import theme from '../theme';

function TagsPage(props) {
	const data = props.data.allMarkdownRemark.group;
	return (
		<MuiThemeProvider theme={theme}>
			<Layout>
				<div className="tags">
					<h1>All tags</h1>
					{
						data.map((tag, index) => (
							<Link to={`/${tag.fieldValue}`} key={index}>
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
