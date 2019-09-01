import React from "react";
import { MuiThemeProvider } from "@material-ui/core";

import Layout from '../components/layout';
import theme from '../theme';
import BlogPostsList from "../components/blog-posts-list";
import useBlogPostList from "../hooks/useBlogPostList";

const IndexPage = () => {
	const postList = useBlogPostList();

	return (
		<MuiThemeProvider theme={theme}>
			<Layout>
				{postList.edges.map(({ node }, i) => (
					<BlogPostsList node={node} key={i} />
				))}
			</Layout>
		</MuiThemeProvider>
	)
}

export default IndexPage;
