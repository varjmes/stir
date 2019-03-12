import React from 'react'
import renderer from 'react-test-renderer'
import { useStaticQuery, StaticQuery } from 'gatsby'

import Recipe from '../src/components/Templates/Recipe/Recipe'
import { recipeData } from '../__mocks__/data'


describe('Recipe', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Recipe data={recipeData} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
