import { Link } from 'gatsby';
import React from 'react';
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton } from '@material-ui/core';
import Logo from './logo';
import theme from '../theme';

const logo = {
	flexGrow: 1,
	marginLeft: '20px'
};

const tagButtonText = {
	textDecoration: 'none',
	color: theme.palette.primary.dark
};

const appBar = {
	background: theme.palette.primary.light,
	borderBottom: `1px solid ${theme.palette.primary.main}`,
	boxShadow: 'none'
}

const Header = () => (
	<AppBar position="static" style={appBar}>
		<Toolbar>
			<IconButton color="inherit" aria-label="Menu">
				<span className="material-icons">menu</span>
			</IconButton>
			<div style={logo}>
				<Logo />
			</div>
			<Button variant="text" color="secondary">
				<Link to="/tags" style={tagButtonText}>Tags</Link>
			</Button>
		</Toolbar>
	</AppBar>
)

export default Header
