import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "../Style/style.css"
import Logo from "../Image/gojek-logo_normal.svg"

export default class Header extends Component {
  render() {
    return (
      <div>

        <div className="container">
          <div className="row1 row fixed-top d-flex justify-content-around">
              <div className="col-sm-8 d-flex justify-content-start align-items-center">
                  <nav className="navigasiHeader nav">
                      <Link to="/" className="nav-link">
                      <img src={Logo} alt="logo"></img>
                      </Link>
                      <Link to="/tentang" className="nav-link">Tentang Kami</Link>
                      <a className="nav-link" href=" ">Layanan</a>
                      <a className="nav-link" href=" ">Blog</a>
                      <a className="nav-link" href=" ">Pusat Bantuan</a>
                      <a className="nav-link" href=" ">Gabung</a>
                      <a className="nav-link" href=" ">Cerdikiawan</a>
                  </nav>
                  
              </div>
              <div className="headerBahasa col-sm-2 d-flex justify-content-end align-items-center">
                  <a className="nav-link" href=" ">Bahasa Indonesia</a>
              </div>
          </div>
        </div>
        
      </div>
    )
  }
}
