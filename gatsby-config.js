module.exports = {
	siteMetadata: {
		title: `Bartek Jakubowski Blog`,
		description: `Personal blog mostly about frontend development`,
		author: `b-jakubowski`,
		siteUrl: `http://www.bjakubowski.com`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-remark`,
		// `gatsby-plugin-offline`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `images`
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `content`,
				name: "pages",
			},
		},
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: [
					'material icons',
					'Roboto:300,400,500, 700',
					'Rubik:300,400,500,700',
				],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `images/logo-icon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-material-ui`,
			options: {},
		},
		{
			resolve: `gatsby-plugin-s3`,
			options: {
				bucketName: 'bjakubowski-blog',
				acl: null
			},
		}
	],
}
