import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider } from '@material-ui/core/styles';
import './header.scss';
import theme from '../theme';


const Header = ({ siteTitle }) => (
	<MuiThemeProvider theme={theme}>
		<AppBar position="static" color="primary" className="header">
			<Toolbar className="header-elements">
				<Typography variant="h6" color="secondary">{siteTitle}</Typography>
				<Button variant="contained" color="secondary">
					<Link to="/tags" className="header-btn-txt">Tags</Link>
				</Button>
			</Toolbar>
		</AppBar>
	</MuiThemeProvider>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
