/**
 * Test Intl renderer
 */
import React from 'react'
import renderer from 'react-test-renderer'
import mockStore from 'utils/mockStore'
import { shallowWithIntl, mountWithIntl } from 'enzyme-react-intl'
import renderIntl, {
  shallow,
  mount,
  renderWithRouter,
} from '../renderers'

const Tmp = () => <div>tmp</div>

let intlComponent
let component
let store

beforeEach(() => {
  store = mockStore({})
  intlComponent = null
  component = null
})


describe('renderIntl', () => {
  describe('renderer', () => {
    it('renders children', () => {
      intlComponent = renderIntl(<Tmp />).toJSON()
      component = renderer.create(<Tmp />).toJSON()
      expect(intlComponent).toEqual(component)
    })

    it('accepts a locale prop', () => {
      intlComponent = renderIntl(<Tmp />, { locale: 'fr' }).toJSON()
      component = renderer.create(<Tmp />).toJSON()
      expect(intlComponent).toEqual(component)
    })
  })

  describe('renderWithRouter', () => {
    it('renders children', () => {
      intlComponent = renderWithRouter(<Tmp />, store).toJSON()
      component = renderer.create(<Tmp />).toJSON()
      expect(intlComponent).toEqual(component)
    })

    it('with empty store', () => {
      intlComponent = renderWithRouter(<Tmp />).toJSON()
      component = renderer.create(<Tmp />).toJSON()
      expect(intlComponent).toEqual(component)
    })
  })

  describe('shallow', () => {
    it('shallow copy of the component', () => {
      intlComponent = shallowWithIntl(<Tmp />)
      component = shallow(<Tmp />)
      expect(intlComponent).toEqual(component)
    })
  })

  describe('mount', () => {
    it('mount copy of the component', () => {
      intlComponent = mountWithIntl(<Tmp />)
      component = mount(<Tmp />)
      expect(intlComponent.length).toBe(mount.length)
    })
  })
})
