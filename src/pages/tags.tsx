import React from 'react';
import { Link, graphql } from "gatsby"
import { MuiThemeProvider } from "@material-ui/core";
import Layout from '../components/layout';
import theme from '../theme';

export interface Tag {
	[x: string]: any;
	fieldValue: React.ReactNode;
	totalCount: number;
}

export interface tagsProps {
	data: {
		allMarkdownRemark: {
			group: Tag;
		};
	};
}

function TagsPage(props: tagsProps) {
	const data = props.data.allMarkdownRemark.group;

	return (
		<MuiThemeProvider theme={theme}>
			<Layout>
				<div className="tags">
					<h1>All tags</h1>
					{
						data.map((tag: Tag, index: number) => (
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