import React from 'react'
import { renderWithRouter } from 'utils/renderers'

import Component from '../'

jest.mock('navigation', () => 'RootNav')

describe('App Component', () => {
  describe('Renders', () => {
    it('default', () => {
      const component = renderWithRouter(<Component />).toJSON()
      expect(component).toMatchSnapshot()
    })
  })
})
