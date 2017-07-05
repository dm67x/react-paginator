import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PaginationNav extends Component {

  static defaultProps = {
    iclass: "",
    active: false
  }

  static propTypes = {
    iclass: PropTypes.string,
    value: PropTypes.any.isRequired,
    onPageChanged: PropTypes.func.isRequired,
    active: PropTypes.bool
  }

  constructor(props) {
    super(props)
  }

  clickEvent(event, value) {
    event.preventDefault()
   
    this.props.onPageChanged(value)
  }

  render() {

    const { iclass, value, active } = this.props

    return (

      <li className={(active) ? "active " + iclass : iclass}>
        <a style={{cursor: "pointer"}} onClick={(event) => this.clickEvent(event, value)}>{value}</a>
      </li>

    )

  }

}

export default PaginationNav