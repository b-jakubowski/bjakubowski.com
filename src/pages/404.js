import React from "react"
import { MuiThemeProvider } from "@material-ui/core";

import Layout from "../components/layout"
import theme from '../theme';

const NotFoundPage = () => (
	<MuiThemeProvider theme={theme}>
		<Layout>
			<h1>NOT FOUND</h1>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		</Layout>
	</MuiThemeProvider>
)

export default NotFoundPage
