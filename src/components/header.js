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
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"

import Logo from "./logo"
import DrawerTagsList from './drawer-tags-list'

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
				<nav>
					<Toolbar>
						<div className={clsx(classes.logo)}>
							<Logo />
						</div>
						<Button
							color="secondary"
							variant="text"
							edge="start"
							aria-label="delete"
							onClick={handleDrawerOpen}
							className={clsx(classes.menuButton, open && classes.hide)}>
							<span style={{ marginLeft: '0.5em' }}>Tags</span>
						</Button>

						<Link to="/" className={classes.linkBtnText}>
							<Button variant="text" color="inherit" className={classes.linkBtn}>
								Blog
							</Button>
						</Link>
						<Link to="/tools" className={classes.linkBtnText}>
							<Button variant="text" color="inherit" className={classes.linkBtn}>
								Tools
							</Button>
						</Link>
						<Link to="/tech-notes" className={classes.linkBtnText}>
							<Button variant="text" color="inherit" className={classes.linkBtn}>
								Tech Notes
							</Button>
						</Link>
						{/* <Link to="/projects" className={classes.linkBtnText}>
							<Button variant="text" color="secondary" className={classes.linkBtn}>
								Projects
							</Button>
						</Link> */}
						{/* <Button variant="text" color="secondary" className={classes.linkBtn}>
							<Link to="/tags" className={classes.linkBtnText}>Tags</Link>
						</Button> */}
					</Toolbar>
				</nav>
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
				<aside>
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
				</aside>
			</Drawer>
		</div>
	)
}

export default Header
