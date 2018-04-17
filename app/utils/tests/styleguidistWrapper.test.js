/**
 * StyleguidistWrapper renderer
 */
import React from 'react'
import { shallow } from 'enzyme'
import { IntlProvider } from 'react-intl'
import Wrapper from '../styleguidistWrapper'

const inner = <div>text</div>

describe('styleguidistWrapper', () => {
  it('renders children', () => {
    const component = shallow(<Wrapper>{inner}</Wrapper>)
    expect(component.contains(
      <IntlProvider locale={'en'}>
        {inner}
      </IntlProvider>
    )).toEqual(true)
  })

  it('accepts a locale prop', () => {
    const component = shallow(<Wrapper locale={'fr'}>{inner}</Wrapper>)
    expect(component.contains(
      <IntlProvider locale={'fr'}>
        {inner}
      </IntlProvider>
    )).toEqual(true)
  })
})
