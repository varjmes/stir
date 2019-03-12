import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../Layout/Layout'
import Seo from '../../Seo/Seo'

const Recipe = ({ data }) => {
  const post = data.markdownRemark
  const {title, description, author, date, keywords} = post.frontmatter
  return (
    <Layout>
      <Seo title={title} description={description} author={author} keywords={keywords} />
      <div>
        <h1>{title}</h1>
        <span>{date}</span>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

Recipe.propTypes = {
  data: PropTypes.any.isRequired
}

export default Recipe

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        author
        keywords
        date
      }
    }
  }
`
