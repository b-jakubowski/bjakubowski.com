import { Link } from 'gatsby';
import React from 'react';
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './logo';
import theme from '../theme';

const container = {
	width: `calc(100% - 200px)`,
	marginLeft: '200px',
	position: 'absolute',
}

const logo = {
	display: 'flex',
	justifyContent: 'center',
	margin: '1em 0'
};

const tagButton = {
	margin: '0 1em'
}

const tagButtonText = {
	textDecoration: 'none',
	color: theme.palette.primary.dark
};

const appBar = {
	background: theme.palette.primary.light,
	boxShadow: 'none',
}

const Header = () => (
	<div style={container}>
		<div style={logo}>
			<Logo />
		</div>
		<AppBar position="static" style={appBar}>
			<Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
				<Button variant="text" color="secondary" style={tagButton}>
					<Link to="/tags" style={tagButtonText}>Tags</Link>
				</Button>
				<Button variant="text" color="secondary" style={tagButton}>
					<Link to="/" style={tagButtonText}>Projects</Link>
				</Button>
				<Button variant="text" color="secondary" style={tagButton}>
					<Link to="/" style={tagButtonText}>Blog</Link>
				</Button>
				<Button variant="text" color="secondary" style={tagButton}>
					<Link to="/" style={tagButtonText}>About</Link>
				</Button>
			</Toolbar>
		</AppBar>
	</div>
)

export default Header
