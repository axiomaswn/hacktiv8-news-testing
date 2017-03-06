import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import App from './App.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { Home } from './components/Home.js'
import { People } from './components/People.js'

describe('<App />', () => {
  const wrapper = mount(<App />)
  it('should render Home and People', () => {
    expect(wrapper.containsAllMatchingElements([
      <Route component={Home} />,
      <Route component={People} />
    ])).to.be.true
  })
})
