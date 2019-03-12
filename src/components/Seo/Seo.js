import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function Seo({ description, meta, keywords, title, author }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title,
            description,
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaAuthor = author || site.siteMetadata.author

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en-gb'
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title} | %s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `og:site_name`,
          content: 'stir.dev',
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
            : []
        )
        .concat(meta)}
    />
  )
}

Seo.defaultProps = {
  meta: [],
  keywords: [],
}

Seo.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default Seo
