import React from 'react'
import { shallow, mount } from 'enzyme'
import { FormattedMessage, defineMessages } from 'react-intl'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router-dom'

import configureStore from 'store'
import { translationMessages } from 'i18n'

import LanguageProvider from '../component'
import ConnectedLanguageProvider from '../'

const messages = defineMessages({
  someMessage: {
    id:             'some.id',
    defaultMessage: 'This is some default message',
    en:             'This is some en message',
  },
})

describe('LanguageProvider Component', () => {
  it('should render its children', () => {
    const children = (<h1>Test</h1>)
    const renderedComponent = shallow(
      <LanguageProvider messages={messages} locale={'en'}>
        {children}
      </LanguageProvider>
    )
    expect(renderedComponent.contains(children)).toBe(true)
  })
})

describe('ConnectedLanguageProvider Component', () => {
  let store

  beforeAll(() => {
    store = configureStore({}, browserHistory)
  })

  it('should render the default language messages', () => {
    const renderedComponent = mount(
      <Provider store={store}>
        <ConnectedLanguageProvider messages={translationMessages}>
          <FormattedMessage {...messages.someMessage} />
        </ConnectedLanguageProvider>
      </Provider>
    )
    expect(renderedComponent.contains(<FormattedMessage {...messages.someMessage} />)).toBe(true)
  })
})
