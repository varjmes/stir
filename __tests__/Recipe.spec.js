import React from 'react'
import renderer from 'react-test-renderer'
import { useStaticQuery, StaticQuery } from 'gatsby'

import Recipe from '../src/components/Templates/Recipe/Recipe'
import { recipeData } from '../__mocks__/data'


describe('Recipe', () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) => render(recipeData)),
      useStaticQuery.mockReturnValue(recipeData)
  })

  it('renders correctly', () => {
    const tree = renderer
      .create(<Recipe data={recipeData} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
