import React from 'react'
import renderer from 'react-test-renderer'
import { useStaticQuery, StaticQuery } from 'gatsby'

import Index from '../../src/pages/index'
import { data } from '../../__mocks__/data'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) => render(data)),
    useStaticQuery.mockReturnValue(data)
})

describe('Index page', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Index data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
