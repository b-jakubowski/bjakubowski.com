import { Link } from 'gatsby';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import logoImg from '../images/logo-icon.png';
import './logo.scss';

const Logo = () => (
	<Link to="/" className="logo">
		<img src={logoImg} alt="bj-logo" className='logo-img' />
		<Typography variant="h6" color="secondary" className="logo-title">bartek jakubowski</Typography>
	</Link>
)

export default Logo
