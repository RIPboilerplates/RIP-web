import React from 'react'
import { shallow } from 'enzyme'
import { Route } from 'react-router-dom'
import history from 'utils/history'

import Component from '../'

let component
let props

beforeEach(() => {
  props = {
    history,
  }
})

describe('RootNav', () => {
  it('renders routes', () => {
    component = shallow(<Component {...props} />)
    expect(component.find(Route).length).toBeGreaterThan(0)
  })
})
