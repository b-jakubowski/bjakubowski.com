import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Seo from "./seo"
import "./layout.css"
import Footer from "./footer"

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		margin: '6em 0 4em 0'
	},
	content: {
		maxWidth: '42rem',
		width: '100%'
	}
}

const Layout = ({ children }) => (
	<>
		<Seo />
		<Header />
		<main style={styles.container}>
			<div style={styles.content}>{children}</div>
		</main>
		<Footer />
	</>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
