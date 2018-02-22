import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import './App.css'
import Display from '../Display/Display'
import Nav from '../Nav/Nav'

class App extends Component {
  render() {
    return (
      <div>
				<Nav />
				<Display />
			</div>
    )
  }
}

export default App
