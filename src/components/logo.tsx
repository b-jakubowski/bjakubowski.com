import { Link } from 'gatsby';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import logoImg from '../images/logo-icon.png';
import theme from '../theme';

const logo = {
	display: 'flex',
	alignItems: 'center',
	textDecoration: 'none',
	flexDirection: 'column'
}

const logoImage = {
	width: '50px',
	marginBottom: '0.5em'
}

const Logo = () => (
	<Link to="/" style={logo}>
		<img src={logoImg} alt="bj-logo" style={logoImage} />
		<Typography variant="h6" style={{ color: theme.palette.secondary.dark }}>Bartek Jakubowski</Typography>
	</Link>
)

export default Logo
