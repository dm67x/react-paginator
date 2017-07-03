import React, {Component} from 'react'
import {render} from 'react-dom'

import Paginator from '../../src/Paginator'

import './index.css'

class Demo extends Component {

  example_datas() {
    let datas = []
    for (var i = 0; i < 10; i++) {
      datas.push(<img src="http://lorempixel.com/400/200/animals/" alt={"Animal" + (i+1)} key={i}/>)
    }
    return datas
  }

  render() {
    return <div className="container">
      <h1>react_paginator Demo</h1>
      <h3>Materialize version</h3>
      <Paginator 
        prevIcon={<i className="material-icons">chevron_left</i>} 
        nextIcon={<i className="material-icons">chevron_right</i>}
        pageClass="waves-effect"
        pageNextClass="next"
        pagePrevClass="prev"
        blankClass="blank"
        >
        {this.example_datas()}
      </Paginator>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
