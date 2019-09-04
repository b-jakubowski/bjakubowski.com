import React from "react"
import IconButton from '@material-ui/core/IconButton'
import SvgIcon from "@material-ui/core/SvgIcon"
import theme from '../theme';
import { Link } from "@material-ui/core"
import config from "../config"

const styles = {
	container: {
		padding: '0.5em',
		background: 'white',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center'
	},
	buttons: {
		width: config.layout.width,
		display: 'flex'
	},
	icon: {
		color: theme.palette.secondary.main
	}
}

const Footer = () => (
	<footer style={styles.container}>
		<div style={styles.buttons}>
			<Link href={config.links.github}>
				<IconButton>
					<SvgIcon style={styles.icon}>
						<path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
					</SvgIcon>
				</IconButton>
			</Link>
			<Link href={config.links.linkedIn}>
				<IconButton>
					<SvgIcon style={styles.icon}>
						<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
					</SvgIcon>
				</IconButton>
			</Link>
		</div>
	</footer>
)

export default Footer
