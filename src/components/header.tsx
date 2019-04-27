import { Link } from 'gatsby';
import React from 'react';
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton } from '@material-ui/core';
import './header.scss';
import Logo from './logo';

const logoStyle = {
	flexGrow: 1,
	marginLeft: '20px'
};

const Header = () => (
	<AppBar position="static" color="primary" className="header">
		<Toolbar>
			<IconButton color="inherit" aria-label="Menu">
				<span className="material-icons">menu</span>
			</IconButton>
			<div style={logoStyle}>
				<Logo />
			</div>
			<Button variant="text" color="secondary">
				<Link to="/tags" className="header-btn-txt">Tags</Link>
			</Button>
		</Toolbar>
	</AppBar>
)

export default Header
