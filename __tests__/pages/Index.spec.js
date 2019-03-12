import React from 'react'
import renderer from 'react-test-renderer'
import { useStaticQuery, StaticQuery } from 'gatsby'

import Index from '../../src/pages/index'
import { indexData } from '../../__mocks__/data'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) => render(indexData)),
    useStaticQuery.mockReturnValue(indexData)
})

describe('Index page', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Index data={indexData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
