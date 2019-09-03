import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import SEO from "./seo"
import "./layout.css"

const styles = {
	container: {},
	content: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		margin: '8em 0 3em 0'
	}
}

const Layout = ({ children }) => (
		<>
			<SEO />
			<Header />
			<div style={styles.content}>
				<main style={{ maxWidth: '960px' }}>{children}</main>
			</div>
		</>
	)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
