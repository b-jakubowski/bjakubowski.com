import React from "react"
import { Link } from "gatsby"
import { Button, MuiThemeProvider } from "@material-ui/core";

import Layout from "../components/layout"
import theme from "../theme";

const buttonText = {
	textDecoration: 'none',
	color: 'white'
}

const ProjectsPage = () => (
	<MuiThemeProvider theme={theme}>
		<Layout>
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
