import React from 'react';
import { Button, Tooltip } from '@material-ui/core';

const buttonText = {
	textDecoration: 'none',
	color: 'white'
}

const buttonContainer = {
	display: 'flex',
	width: '100%'
}

const PreviousNextPost = (props) => {
	const { prev, next } = props

	return (
		<div style={{ display: 'flex' }}>
			{prev &&
				<div style={buttonContainer}>
					<Tooltip title={prev.frontmatter.title}>
						<Button color="secondary" variant="contained">
							<span className="material-icons">keyboard_arrow_left</span>
							<a href={prev.fields.slug} style={buttonText}>Prev post</a>
						</Button>
					</Tooltip>
				</div>
			}
			{next &&
				<div style={buttonContainer}>
					<div style={{ flexGrow: 1 }}></div>
					<Tooltip title={next.frontmatter.title}>
						<Button color="secondary" variant="contained">
							<a href={next.fields.slug} style={buttonText}>Next post</a>
							<span className="material-icons">keyboard_arrow_right</span>
						</Button>
					</Tooltip>
				</div>
			}
		</div>
	)
}

export default PreviousNextPost;