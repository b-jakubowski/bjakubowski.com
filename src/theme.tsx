import { indigo, green } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
	palette: {
		primary: { main: green['A400'] }, // Purple and green play nicely together.
		secondary: { main: indigo[900] }, // This is just green.A700 as hex.
		type: 'dark'
	},
	typography: {
		useNextVariants: true
	},
});

export default theme;