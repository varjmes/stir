import React from 'react'

import Layout from '../components/Layout/Layout'
import Seo from '../components/Seo/Seo'

export default () => (
  <Layout>
  <Seo title='Cooking in progress' keywords={['food', 'cooking', 'baking', 'recipes']} />
    <p>
      This is a <b>test</b> paragraph, to look at typography <em>scaling</em>{' '}
      and nice fonts.
    </p>
  </Layout>
)
