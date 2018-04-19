import React from 'react'
import renderer from 'utils/renderers'
import mockStore from 'utils/mockStore'
import Component from '../'

describe('LoginPage Component', () => {
  let component
  let store

  beforeEach(() => {
    component = null
    store = mockStore()
  })

  describe('Snapshot Renders', () => {
    it('default', () => {
      component = renderer(<Component store={store} />).toJSON()
      expect(component).toMatchSnapshot()
    })
  })
})
