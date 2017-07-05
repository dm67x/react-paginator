import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PaginationContent extends Component {

  static defaultProps = {
    iclass: ""
  }

  static propTypes = {
    iclass: PropTypes.string,
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {

    const { iclass, start, end } = this.props

    return (

      <div className={iclass}>

        {this.props.children.slice(start, end)}

      </div>

    )

  }

}

export default PaginationContent