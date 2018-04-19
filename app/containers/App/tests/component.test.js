import React from 'react'
import { renderWithRouter } from 'utils/renderers'
// import { shallow } from 'enzyme'

import Component from '../component'

jest.mock('navigation', () => 'MainNav')
jest.mock('navigation/PublicRoutes', () => 'PublicNav')

let component
let props

beforeEach(() => {
  component = null
  props = {
    loggedIn: false,
  }
})

describe('App Component', () => {
  describe('Snapshot Renders', () => {
    it('default', () => {
      component = renderWithRouter(<Component {...props} />)
      expect(component).toMatchSnapshot()
    })

    it('logged in', () => {
      props.loggedIn = true

      component = renderWithRouter(<Component {...props} />)
      expect(component).toMatchSnapshot()
    })
  })
})
