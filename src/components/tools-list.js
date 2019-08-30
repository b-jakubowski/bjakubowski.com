import React from "react"
import { Divider, List, ListItem, ListItemText, Typography } from "@material-ui/core"

import "./layout.css"

const styles = {
}

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const ToolsList = ({ props }) => {
  const toolsListHeaders = Object.keys(props);
  console.log(props);
  return (
    <>
      {toolsListHeaders.map((header, index) => (
        <List component="nav" aria-label="main mailbox folders" key={index}>
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
