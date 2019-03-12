import React from 'react'

import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import Seo from '../components/Seo/Seo'

export default ({ data }) => {
  return (
    <Layout>
      <Seo title='Cooking in progress' keywords={['food', 'cooking', 'baking', 'recipes']} />
      <p>
        This is a <b>test</b> paragraph, to look at typography <em>scaling</em>{' '}
        and nice fonts.
      </p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
          >
            <h3>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h3>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
