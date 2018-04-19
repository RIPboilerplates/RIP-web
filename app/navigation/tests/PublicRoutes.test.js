import React from 'react'
import { shallow } from 'enzyme'
import { Route } from 'react-router-dom'
import history from 'utils/history'

import Component from '../PublicRoutes'

let component
let props

beforeEach(() => {
  props = {
    history,
  }
})

describe('PublicRoutes', () => {
  it('renders routes', () => {
    component = shallow(<Component {...props} />)
    expect(component.find(Route).length).toBeGreaterThan(0)
  })
})
