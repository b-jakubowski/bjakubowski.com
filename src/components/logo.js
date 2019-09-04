import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image'

const logo = {
	display: 'flex',
	alignItems: 'center',
	textDecoration: 'none',
	flexDirection: 'column'
}

const logoImage = {
	width: '30px',
	margin: 0
}

const Logo = () => {
	const { image } = useStaticQuery(graphql`
		query {
			image: file(relativePath: { eq: "logo-icon.png"}) {
				sharp: childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	
	return (
		<Link to="/" style={logo}>
			<Img fluid={image.sharp.fluid} style={logoImage} />
		</Link>
	)
}

export default Logo
