import React from 'react';
import { Button, Tooltip } from '@material-ui/core';
import { Link } from 'gatsby';

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
		<div style={{ display: 'flex', marginTop: '4em' }}>
			{prev &&
				<div style={buttonContainer}>
					<Tooltip title={prev.frontmatter.title}>
						<Button color="secondary" variant="contained">
							<span className="material-icons">keyboard_arrow_left</span>
							<Link to={prev.fields.slug} style={buttonText}>Prev post</Link>
						</Button>
					</Tooltip>
				</div>
			}
			{next &&
				<div style={buttonContainer}>
					<div style={{ flexGrow: 1 }}></div>
					<Tooltip title={next.frontmatter.title}>
						<Button color="secondary" variant="contained">
							<Link to={next.fields.slug} style={buttonText}>Next post</Link>
							<span className="material-icons">keyboard_arrow_right</span>
						</Button>
					</Tooltip>
				</div>
			}
		</div>
	)
}

export default PreviousNextPost;