import React from 'react';
import { Link } from "gatsby"
import { MuiThemeProvider } from "@material-ui/core";

import Layout from '../components/layout';
import theme from '../theme';
import useTagsList from '../hooks/useTagsList';

function TagsPage() {
	const tagsList = useTagsList();
	return (
		<MuiThemeProvider theme={theme}>
			<Layout>
				<div className="tags">
					<h1>All tags</h1>
					{
						tagsList.map((tag, index) => (
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
