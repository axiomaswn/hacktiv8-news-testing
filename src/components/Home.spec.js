import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import {Home} from './Home.js'

describe('<Home />', () => {
  const wrapper = shallow(<Home />)

  it('should start with empty datas', () => {
    expect(wrapper.state('datas')).to.have.lengthOf(0)
  })

  it('check search keyword save to state', () => {
    const event = {
      target: {
        value: 'React'
      }
    }
    wrapper.instance().handleChange(event)
    expect(wrapper.state('searchKeyword')).to.eql('React')
  })
  it('add data into state', () => {
    const data = [
      {id: 1, title: 'React'}
    ]
    const event = {
      target: {
        value: 'React'
      }
    }
    wrapper.instance().handleChange(event)
    wrapper.setState({'datas': data})

    expect(wrapper.state('datas')).to.eql(data)
  })
  it('should filter data', () => {
    const data = [
      {id: 1, title: 'React'}
    ]
    wrapper.setState({
      searchKeyword: 'ct'
    })
    expect(wrapper.instance().filterData(data)).to.eql(data)
  })
})
