import React from "react"
import { Link } from "gatsby"
import { Button, MuiThemeProvider, List, ListItemText, ListItem, Typography, Divider } from "@material-ui/core";
// import ListItemLink from '@material-ui/core';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

import Layout from "../components/layout"
import SEO from "../components/seo"
import theme from "../theme";
import toolsImg from '../images/tools.jpg';

const styles = {
	headerImg: {
		height: '200px',
		width: '100%',
		objectFit: 'cover'
	},
	listHeader: {
		fontWeight: 'bold',
		fontSize: '1.4em'
	},
	buttonText: {
		marginTop: '4em',
		textDecoration: 'none',
		color: 'white'
	}
}

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const ToolsPage = () => (
	<MuiThemeProvider theme={theme}>
		<Layout>
			<SEO title="Front-end tools" />
			<article>
			<header>
				<figure>
					<img src={toolsImg} alt="tools img" width="840" height="552" style={styles.headerImg} />
				</figure>
				<h1>Useful tools for frontend developers</h1>
			</header>
			<List component="nav" aria-label="main mailbox folders">
				<Typography style={styles.listHeader}>General</Typography>
				<Divider />
				<ListItemLink href="https://frontendchecklist.io/">
					<ListItemText
						primary="Frontend checklist"
						secondary="exhaustive list of all elements you need to have / to test before launching your website / HTML page to production." />
				</ListItemLink>
			</List>
			</article>
			<Link to="/">
				<Button color="secondary" variant="contained" style={styles.buttonText}>
					<span className="material-icons">keyboard_arrow_left</span>
					Home page
				</Button>
			</Link>
		</Layout>
	</MuiThemeProvider>
)

export default ToolsPage
