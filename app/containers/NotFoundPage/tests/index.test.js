import React from 'react'
import renderer from 'utils/renderIntl'

import Component from '../'

describe('NotFoundPage Component', () => {
  it('not load by default', () => {
    const component = renderer(<Component />).toJSON()
    expect(component).toBeNull()
  })

  it('does load the component', async () => {
    await Component.preload()
    const component = renderer(<Component />).toJSON()
    expect(component).not.toBeNull()
  })
})
