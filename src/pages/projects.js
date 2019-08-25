import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, MuiThemeProvider } from "@material-ui/core";
import theme from "../theme";

const buttonText = {
	textDecoration: 'none',
	color: 'white'
}

const ProjectsPage = () => (
	<MuiThemeProvider theme={theme}>
		<Layout>
			<SEO title="Page two" />
			<h1>Hi from the projects page</h1>
			<Link to="/" style={buttonText}>
				<Button color="secondary" variant="contained">
					<span className="material-icons">keyboard_arrow_left</span>
					Home page
				</Button>
			</Link>
		</Layout>
	</MuiThemeProvider>
)

export default ProjectsPage
