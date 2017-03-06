import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import {Home} from './Home.js'

describe('<Home />', () => {
  const wrapper = mount(<Home />)

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
    wrapper.setState({
      datas: data
    })


    const that = wrapper.instance()

    const filteredData = wrapper.state('datas').filter(that.filterData.bind(that))
    // console.log(filteredData);
    expect(filteredData).to.eql(data)
  })

  it('check Fetch news', (done) => {
    fetch('http://hn.algolia.com/api/v1/search?query=react')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      wrapper.setState({
      datas: data.hits
      })
      // console.log(wrapper.state('datas'));
      expect(wrapper.state('datas')).to.have.lengthOf(20)
      done()
    })
    .catch(err => {
      console.log(err);
    })
  })

})
