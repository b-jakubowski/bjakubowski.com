import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
		render={data => (
			<>
				<Header />
				<div
					style={{
						margin: `0 auto`,
						maxWidth: 960,
						padding: `0px 1.0875rem 1.45rem`,
						marginTop: '4em',
					}}
				>
					<main>{children}</main>
					<footer>
						© {new Date().getFullYear()}, Built with
            {` `}
						<a href="https://www.gatsbyjs.org">Gatsby</a>
					</footer>
				</div>
			</>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
