module.exports = {
	siteMetadata: {
		title: `Bartosz Jakubowski Blog`,
		description: `Blog made with GatsbyJS`,
		author: `b-jakubowski`,
		siteUrl: `https://github.com/b-jakubowski`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-image`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-transformer-remark`,
		'gatsby-plugin-offline',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content`,
				name: "pages",
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
