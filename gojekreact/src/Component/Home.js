import React, { Component } from 'react'
import Header from "./Asset/Header"
import Jumbotron from "./Asset/Jumbotron"
import Solv from "./Asset/Solv"
import Slider from "./Asset/Slider"
import Product from "./Asset/Product"
import Footer from "./Asset/Footer"

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Jumbotron/>
        <Solv/>
        <Slider/>
        <Product/>
        <Footer/>
      </div>
    )
  }
}
