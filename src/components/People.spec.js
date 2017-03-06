import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import {People} from './People.js'
import {ListName} from './ListName.js'

describe('<People />', () => {
  const wrapper = mount(<People />)

  it('check List People', () => {
    expect(wrapper.containsAllMatchingElements([
      <ListName />
    ])).to.be.true
  })

  it('check List Sum People', () => {
    expect(wrapper.state('datas')).to.have.lengthOf(0)
  })

  it('check Fetch People', (done) => {
    fetch('http://swapi.co/api/people/?page=1')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      wrapper.setState({
      datas: data.results
      })
      // console.log(wrapper.state('datas'));
      expect(wrapper.state('datas')).to.have.lengthOf(10)
      done()
    })
    .catch(err => {
      console.log(err);
    })
  })

})
