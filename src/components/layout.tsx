import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"
import theme from "../theme";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { Tag } from "../pages/tags";


const container = {
	display: 'flex'
}

const content = {
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'column',
	alignItems: 'center',
	width: '100%',
	margin: '13em 0 3em 0'
}

const drawer = {
	width: '200px'
}

const drawerListItem = {
	textTransform: 'uppercase',
	textDecoration: 'none',
	fontSize: '0.8rem',
	fontFamily: `"Roboto", "Helvetica", "Arial", sans- serif`,
	letterSpacing: '0.00938em',
	width: '180px',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis'
}

const drawerTitle = {
	display: 'flex',
	alignItems: 'center',
	height: '64px',
	paddingLeft: '16px',
	fontFamily: `"Roboto", "Helvetica", "Arial", sans- serif`,
	color: theme.palette.primary.main,
	backgroundColor: theme.palette.primary.light
}

const tags = {
	width: drawer.width,
	display: 'flex',
	flexDirection: 'column'
}

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query {
				allMarkdownRemark(
					limit: 2000) {
					group(field: frontmatter___tags) {
						fieldValue
						totalCount
					}
				}
			}
		`}
		render={props => {
			const data = props.allMarkdownRemark.group;

			return (
				<div style={container}>
					<Header />
					<Drawer
						variant="permanent"
						anchor="left"
						style={drawer}
					>
						<div style={tags}>
							<div style={drawerTitle}>
								<h3 style={{ margin: '0' }}>TAGS</h3>
							</div>
							<List>
								{data.map((tag: Tag, index: number) => (
									<ListItem button key={index}>
										<Link to={`/${tag.fieldValue}`} style={drawerListItem}>{`${tag.fieldValue} (${tag.totalCount})`}</Link>
									</ListItem>
								))}
							</List>
						</div>
					</Drawer>
					<div style={content}>
						<main style={{ maxWidth: '960px' }}>{children}</main>
					</div>
				</div>
			)
		}
		}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
