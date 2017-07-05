import React, {Component} from 'react'
import {render} from 'react-dom'

import { Paginator, PaginationNav, PaginationIconNav, PaginationContent, PaginationLabel } from '../../src'

import './index.css'

class Demo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      perPage: 6,
      numberOfPages: Math.ceil(20 / 6)
    }
  }

  example_datas() {
    let datas = []
    for (var i = 0; i < 20; i++) {
      datas.push(<img src="http://lorempixel.com/400/200/animals/" alt={"Animal" + (i+1)} key={i}/>)
    }
    return datas
  }

  pageChange(value) {
    this.setState({
      currentPage: value
    })
  }

  firstPage() {
    this.setState({
      currentPage: 1
    })
  }

  lastPage() {
    this.setState((prevState) => ({
      currentPage: prevState.numberOfPages
    }))
  }

  nextPage() {
    if (this.state.currentPage < this.state.numberOfPages) {
      this.setState((prevState) => ({
        currentPage: prevState.currentPage + 1
      }))
    }
  }

  prevPage() {
    if (this.state.currentPage > 1) {
      this.setState((prevState) => ({
        currentPage: prevState.currentPage - 1
      }))
    }
  }

  render() {

    const { currentPage, perPage, numberOfPages } = this.state

    let navLinks = []
    for (let i = 1; i <= numberOfPages; i++) {
      navLinks.push(
        <PaginationNav 
          key={i} 
          iclass="waves-effect" 
          active={currentPage == i} 
          value={i} 
          onPageChanged={(value) => this.pageChange(value)}/>
      )
    }

    return (
      <div className="container">
        <h1>react_paginator Demo</h1>
        <h3>Materialize version</h3>
        
        <Paginator>

          <PaginationContent start={(currentPage-1) * perPage} end={(currentPage - 1) * perPage + perPage}>
            {this.example_datas()}
          </PaginationContent>

          <PaginationLabel 
            disabled={currentPage == 1} 
            iclass="first" 
            value="First" 
            onClick={() => this.firstPage()}/>

          <PaginationIconNav
            icon={<i className="material-icons">chevron_left</i>}
            disabled={currentPage === 1}
            iclass="next"
            onClick={() => this.prevPage()}
          />

          {navLinks}

          <PaginationIconNav
            icon={<i className="material-icons">chevron_right</i>}
            disabled={currentPage === numberOfPages}
            iclass="prev"
            onClick={() => this.nextPage()}
          />

          <PaginationLabel 
            disabled={currentPage == numberOfPages} 
            iclass="last" 
            value="Last" 
            onClick={() => this.lastPage()}/>

        </Paginator>

      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
