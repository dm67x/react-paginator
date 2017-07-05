import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PaginationIconNav extends Component {

  static defaultProps = {
    iclass: "",
    disabled: false
  }

  static propTypes = {
    iclass: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.node.isRequired,
    onClick: PropTypes.func
  }

  constructor(props) {
    super(props)
  }

  render() {

    const { icon, onClick, iclass, disabled } = this.props

    return (

      <li className={(disabled) ? "disabled " + iclass : iclass}>
        <a style={{cursor: "pointer"}} onClick={() => onClick()}>{icon}</a>
      </li>

    )

  }

}

export default PaginationIconNav