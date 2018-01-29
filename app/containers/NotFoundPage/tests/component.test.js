import React from 'react'
import { FormattedMessage } from 'react-intl'
import { shallow } from 'enzyme'

import NotFoundPage from '../component'
import messages from '../messages'

describe('<NotFoundPage />', () => {
  it('should render the page message', () => {
    const component = shallow(<NotFoundPage />)
    expect(component.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true)
  })
})
