import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Button, MuiThemeProvider } from "@material-ui/core";
import Img from "gatsby-image"

import Layout from "../components/layout"
import theme from "../theme"
import ToolsList from "../components/tools-list"
import toolsListJson from "../assets/tools"
import config from "../config";

const styles = {
	container: {
    maxWidth: config.layout.width,
		padding: '1em',
		backgroundColor: 'white'
	},
	headerImg: {
		height: '200px',
		width: '100%',
		objectFit: 'cover'
	},
	listHeader: {
		fontWeight: 'bold',
		fontSize: '1.4em'
	},
	button: {
		marginTop: '4em',
		color: 'white'
	}
}

const ToolsPage = () => {
	const { image } = useStaticQuery(graphql`
		query {
			image: file(relativePath: { eq: "tools.jpg"}) {
				sharp: childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	return(
		<MuiThemeProvider theme={theme}>
			<Layout>
				<article style={styles.container}>
					<header>
						<figure>
							<Img fluid={image.sharp.fluid} style={styles.headerImg} />
						</figure>
						<h1>Useful tools for frontend developers</h1>
					</header>
					<ToolsList props={toolsListJson} />
					<Link to="/" style={{textDecoration: 'none'}}>
						<Button color="secondary" variant="contained" style={styles.button}>
							<span className="material-icons">keyboard_arrow_left</span>
							Home page
						</Button>
					</Link>
				</article>
			</Layout>
		</MuiThemeProvider>
	)
}

export default ToolsPage
