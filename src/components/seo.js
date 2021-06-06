import React from "react"
import Helmet from "react-helmet"

import useSiteMetadata from "../hooks/useSiteMetadata";

function Seo() {
	const { title, description, author } = useSiteMetadata();

	return (
		<Helmet
			htmlAttributes={{
				lang: `en`,
			}}
			title={title}
			meta={[
				{
					name: `description`,
					content: description,
				},
				{
					name: `author`,
					content: author
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: description,
				},
				{
					property: `og:type`,
					content: `website`,
				}
			]}
		/>
	)
}

export default Seo
