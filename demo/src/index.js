import React, {Component} from 'react'
import {render} from 'react-dom'

import Paginator from '../../src/Paginator'

class Demo extends Component {

  example_datas() {
    let datas = []
    for (var i = 0; i < 10; i++) {
      datas.push(<img src="http://lorempixel.com/400/200/animals/" alt={"Animal" + (i+1)}/>)
    }
    return datas
  }

  render() {
    return <div className="container">
      <h1>react-paginator Demo</h1>
      <Paginator>
        {this.example_datas()}
      </Paginator>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
