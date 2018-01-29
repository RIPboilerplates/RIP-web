import React from 'react'
import Loadable from 'react-loadable'
import renderer from 'utils/renderIntl'

import Component from '../'

describe('<NotFoundPage />', () => {
  it('should not load by default', () => {
    const component = renderer(<Component />).toJSON()
    expect(component).toBeNull()
  })

  it('should load the component', async () => {
    await Loadable.preloadAll()
    const component = renderer(<Component />).toJSON()
    expect(component).not.toBeNull()
  })
})
