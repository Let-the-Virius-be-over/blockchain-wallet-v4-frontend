import { shallow } from 'enzyme'
import React from 'react'
import toJson from 'enzyme-to-json'

import TabMenuItem from './TabMenuItem'

describe('TabMenuItem component', () => {
  it('default renders correctly', () => {
    const component = shallow(<TabMenuItem selected />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
