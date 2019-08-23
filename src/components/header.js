import React from 'react'

import { Link } from 'gatsby'

import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Button from "@material-ui/core/Button"
import Logo from "./logo"

import DrawerTagsList from './drawer-tags-list'
import { Typography } from "@material-ui/core"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		background: 'white',
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: '0 8px',
		...theme.mixins.toolbar,
		justifyContent: 'space-between',
	},
	drawerHeaderText: {
		marginLeft: '0.5em',
		textTransform: 'uppercase',
		fontWeight: 500
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		marginLeft: 0,
	},
	linkBtn: {
		margin: '0 1em'
	},
	linkBtnText: {
		textDecoration: 'none',
		color: 'grey'
	},
	logo: {
		display: 'flex',
		justifyContent: 'center',
		margin: '0 1em'
	},
}))

const Header = () => {
	const classes = useStyles()

	const theme = useTheme()
	const [open, setOpen] = React.useState(false)

	function handleDrawerOpen() {
		setOpen(true)
	}

	function handleDrawerClose() {
		setOpen(false)
	}

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				elevation={0}
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="Open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<div className={clsx(classes.logo)}>
						<Logo />
					</div>
					<Button variant="text" color="secondary" className={classes.linkBtn}>
						<Link to="/tags" className={classes.linkBtnText}>Tags</Link>
					</Button>
					<Button variant="text" color="secondary" className={classes.linkBtn}>
						<Link to="/" className={classes.linkBtnText}>Projects</Link>
					</Button>
					<Button variant="text" color="secondary" className={classes.linkBtn}>
						<Link to="/" className={classes.linkBtnText}>Blog</Link>
					</Button>
					<Button variant="text" color="secondary" className={classes.linkBtn}>
						<Link to="/" className={classes.linkBtnText}>About</Link>
					</Button>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<Typography className={classes.drawerHeaderText}>Tags</Typography>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</div>
				<Divider />
				<DrawerTagsList />
			</Drawer>
		</div>
	)
}

export default Header
