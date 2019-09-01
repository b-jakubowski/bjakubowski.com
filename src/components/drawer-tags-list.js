import React from "react"
import { Link } from "gatsby"
import { List, ListItem, ListItemText } from "@material-ui/core"

import "./layout.css"
import useTagsList from "../hooks/useTagsList";

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

const DrawerTagsList = () => {
	const tagsList = useTagsList();

	return (
		<List>
			{tagsList.map((tag, index) => (
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

export default DrawerTagsList
