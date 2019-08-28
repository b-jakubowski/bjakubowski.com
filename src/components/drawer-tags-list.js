import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import "./layout.css"
import { List, ListItem, ListItemText } from "@material-ui/core"

const styles = {
	drawerListItem: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		textTransform: 'uppercase'
	},
	counter: {
		width: '80%',
	}
}

const DrawerTagsList = () => (
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
				<List>
					{data.map((tag, index) => (
						<Link to={`/${tag.fieldValue}`} key={index}>
							<ListItem button key={index} style={styles.drawerListItem}>
								<ListItemText primary={tag.fieldValue} style={styles.counter} />
								<ListItemText primary={`(${tag.totalCount})`}/>
							</ListItem>
						</Link>
					))}
				</List>
			)
		}
		}
	/>
)

export default DrawerTagsList
