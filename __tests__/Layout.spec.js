import React from 'react'
import renderer from 'react-test-renderer'

import Layout from '../src/components/Layout/Layout'

describe('Layout', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Layout />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
