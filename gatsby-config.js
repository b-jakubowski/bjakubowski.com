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
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 786,
						},
					},
					{
						resolve: `gatsby-remark-table-of-contents`,
						options: {
							exclude: "Table of Contents",
							tight: false,
							ordered: false,
							fromHeading: 1,
							toHeading: 6,
							className: "table-of-contents"
						},
					},
					`gatsby-remark-autolink-headers`,
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							// Class prefix for <pre> tags containing syntax highlighting;
							// defaults to 'language-' (e.g. <pre class="language-js">).
							// If your site loads Prism into the browser at runtime,
							// (e.g. for use with libraries like react-live),
							// you may use this to prevent Prism from re-processing syntax.
							// This is an uncommon use-case though;
							// If you're unsure, it's best to use the default value.
							classPrefix: "language-",
							// This is used to allow setting a language for inline code
							// (i.e. single backticks) by creating a separator.
							// This separator is a string and will do no white-space
							// stripping.
							// A suggested value for English speakers is the non-ascii
							// character '›'.
							inlineCodeMarker: null,
							// This lets you set up language aliases.  For example,
							// setting this to '{ sh: "bash" }' will let you use
							// the language "sh" which will highlight using the
							// bash highlighter.
							aliases: {},
							// This toggles the display of line numbers globally alongside the code.
							// To use it, add the following line in gatsby-browser.js
							// right after importing the prism color scheme:
							//  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
							// Defaults to false.
							// If you wish to only show line numbers on certain code blocks,
							// leave false and use the {numberLines: true} syntax below
							showLineNumbers: false,
							// If setting this to true, the parser won't handle and highlight inline
							// code used in markdown i.e. single backtick code like `this`.
							noInlineHighlight: false,
							// This adds a new language definition to Prism or extend an already
							// existing language definition. More details on this option can be
							// found under the header "Add new language definition or extend an
							// existing language" below.
							languageExtensions: [
								{
									language: "superscript",
									extend: "javascript",
									definition: {
										superscript_types: /(SuperType)/,
									},
									insertBefore: {
										function: {
											superscript_keywords: /(superif|superelse)/,
										},
									},
								},
							],
							// Customize the prompt used in shell output
							// Values below are default
							prompt: {
								user: "root",
								host: "localhost",
								global: false,
							},
							// By default the HTML entities <>&'" are escaped.
							// Add additional HTML escapes by providing a mapping
							// of HTML entities and their escape value IE: { '}': '&#123;' }
							escapeEntities: {},
						},
					},
				],
			},
		},
		`gatsby-plugin-offline`,
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
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint: 'https://gmail.us6.list-manage.com/subscribe/post?u=b7307bdd046250b499d500346&amp;id=7868583fec', // string; add your MC list endpoint here; see instructions below
				timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
			},
		}
	],
}
