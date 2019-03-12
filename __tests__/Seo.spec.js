import React from 'react'
import renderer from 'react-test-renderer'
import { useStaticQuery, StaticQuery } from 'gatsby'

import Seo from '../src/components/Seo/Seo'
import { data } from '../__mocks__/data'


describe('Seo', () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) => render(data)),
      useStaticQuery.mockReturnValue(data)
  })

  it('renders correctly', () => {
    const tree = renderer
      .create(<Seo title='test title'/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
