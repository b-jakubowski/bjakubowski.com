import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const container = {
}

const content = {
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'column',
	alignItems: 'center',
	width: '100%',
	margin: '10em 0 3em 0'
}

const Layout = ({ children }) => {

	return (
		<div style={container}>
			<Header />
			<div style={content}>
				<main style={{ maxWidth: '960px' }}>{children}</main>
			</div>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
