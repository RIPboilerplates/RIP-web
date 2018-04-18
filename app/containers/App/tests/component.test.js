import React from 'react'
import renderer from 'utils/renderers'
// import { shallow } from 'enzyme'

import Component from '../component'

jest.mock('navigation', () => 'RootNav')

let component
let props

beforeEach(() => {
  component = null
  props = {}
})

describe('App Component', () => {
  describe('Snapshot Renders', () => {
    it('default', () => {
      component = renderer(<Component {...props} />).toJSON()
      expect(component).toMatchSnapshot()
    })
  })
})
