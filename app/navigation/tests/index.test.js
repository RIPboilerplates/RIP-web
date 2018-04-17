import React from 'react'
import { mountWithStore } from 'utils/renderers'
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
    component = mountWithStore(<Component {...props} />)
    expect(component.find(Route).length).toBeGreaterThan(0)
  })
})
