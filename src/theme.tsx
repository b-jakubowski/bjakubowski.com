import { indigo, grey } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
	palette: {
		primary: { main: grey[50] },
		secondary: { main: indigo[900] }
	},
	typography: {
		useNextVariants: true
	},
});

export default theme;