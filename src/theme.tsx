import { indigo, grey } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
	palette: {
		primary: {
			light: grey[50],
			main: grey[500],
			dark: grey[900],
		},
		secondary: {
			light: indigo[300],
			main: indigo[500],
			dark: indigo[700]
		}
	},
	typography: {
		useNextVariants: true
	},
});

export default theme;