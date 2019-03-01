import React from 'react'
import renderer from 'react-test-renderer'

import Index from '../../src/pages/index'

describe('Index page', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Index />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
