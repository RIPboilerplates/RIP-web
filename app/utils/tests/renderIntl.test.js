/**
 * Test Intl renderer
 */
import React from 'react'
import renderer from 'react-test-renderer'
import renderIntl from '../renderIntl'

const Tmp = () => <div>tmp</div>

describe('renderIntl', () => {
  it('renders children', () => {
    const intlComponent = renderIntl(<Tmp />).toJSON()
    const component = renderer.create(<Tmp />).toJSON()
    expect(intlComponent).toEqual(component)
  })

  it('accepts a locale prop', () => {
    const intlComponent = renderIntl(<Tmp />, { locale: 'fr' }).toJSON()
    const component = renderer.create(<Tmp />).toJSON()
    expect(intlComponent).toEqual(component)
  })
})
