import React from "react"
import { Divider, List, ListItem, ListItemText, Typography } from "@material-ui/core"

import "./layout.css"

const styles = {
	toolList: {
		marginBottom: '1.5em'
	},
	listHeader: {
		fontWeight: 'bold',
		fontSize: '1.4em'
	},
}

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

const ToolsList = ({ props }) => {
	const toolsListHeaders = Object.keys(props);
	return (
		<>
			{toolsListHeaders.map((header, index) => (
				<List component="nav" key={index} style={styles.toolList}>
					<Typography style={styles.listHeader}>{header}</Typography>
					<Divider />
					{Object.values(props[header]).map((tool, index) => (
						<ListItemLink href={tool.link} key={index}>
							<ListItemText
								primary={tool.title}
								secondary={tool.description} />
						</ListItemLink>
					))}
				</List>
				))
			}
		</>
	);
}

export default ToolsList
