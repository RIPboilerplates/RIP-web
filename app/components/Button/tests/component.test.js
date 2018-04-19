import React from 'react'
import renderer from 'utils/renderers'
// import { shallow } from 'enzyme'

import Component from '../component'

let component
let props

beforeEach(() => {
  component = null
  props = {}
})

describe('Button Component', () => {
  describe('Snapshot Renders', () => {
    it('default', () => {
      component = renderer(<Component {...props} />).toJSON()
      expect(component).toMatchSnapshot()
    })
  })
})
