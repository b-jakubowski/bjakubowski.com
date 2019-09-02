import { Link } from 'gatsby';
import React from 'react';
import logoImg from '../../images/logo-icon.png';

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

const Logo = () => (
	<Link to="/" style={logo}>
		<img src={logoImg} alt="bj-logo" style={logoImage} />
	</Link>
)

export default Logo
