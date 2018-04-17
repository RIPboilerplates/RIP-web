import React from 'react'
import renderer from 'utils/renderIntl'

import Component from '../'

describe('NotFoundPage Component', () => {
  describe('Renders', () => {
    it('default', () => {
      const component = renderer(<Component />).toJSON()
      expect(component).toMatchSnapshot()
    })
  })
})
