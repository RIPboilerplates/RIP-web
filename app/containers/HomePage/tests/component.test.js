import React from 'react'
import { FormattedMessage } from 'react-intl'
import { shallow } from 'enzyme'

import HomePage from '../component'
import messages from '../messages'

describe('HomePage Component', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <HomePage />
    )
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true)
  })
})
