import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "./header.css";
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = ({ siteTitle }) => (
	<AppBar position="static" color="default">
		<Toolbar className="header-elements">
			<Typography variant="h6" color="inherit">{siteTitle}</Typography>
			<Button variant="contained" color="default">
				<Link to="/tags" className="header-btn-txt">Tags</Link>
			</Button>
		</Toolbar>
	</AppBar>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
