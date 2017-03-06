import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import {List, Search} from './index.js'

export class Home extends Component {
  constructor () {
    super()
    this.state = {
      datas: [],
      searchKeyword: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentWillMount() {
    const appThis = this
    fetch('http://hn.algolia.com/api/v1/search?query=react')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      appThis.setState({
      datas: data.hits
      })
    });
  }

  handleChange (e) {
    this.setState({
      searchKeyword: e.target.value
    })
  }

  filterData (data) {

    if (data.title && this.state.searchKeyword){
      return data.title.toLowerCase().indexOf(this.state.searchKeyword.toLowerCase()) !== -1
    }
    else {
      return data
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>---Testing---</h1>
        </div>
        <h3>Search</h3>
        <Search handles={this.handleChange} />
        <List datas={this.state.datas.filter(this.filterData.bind(this))
        } />
      </div>
    )
  }
}
