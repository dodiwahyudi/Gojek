
import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Component/Home';
import Tentang from './Component/Tentang'

export default class App extends Component {
  render() {
    return (
        <Router>
          <Route path="/" exact component={Home}/>
          <Route path="/tentang" exact component={Tentang}/>
        </Router>
    )
  }
}
