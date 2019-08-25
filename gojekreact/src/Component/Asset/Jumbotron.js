import React, { Component } from 'react'

export default class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div className="row2 row">
          <div className="col-sm-6 d-flex flex-column justify-content-center align-items-start" >
              <h1 className="display-4 font-weight-bold">Gojek Mempersembahkan CERDIKIAWAN</h1>
              <p className="font-italic font-weight-bold ">#PastiAdaJalan</p>
          </div>
          <div className="col-sm-6"></div>
        </div>
      </div>
    )
  }
}
