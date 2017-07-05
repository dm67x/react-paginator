import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PaginationLabel extends Component {

  static defaultProps = {
    iclass: "",
    disabled: false
  }

  static propTypes = {
    iclass: PropTypes.string,
    onClick: PropTypes.func,
    value: PropTypes.any.isRequired,
    disabled: PropTypes.bool
  }

  constructor(props) {
    super(props)
  }

  render() {

    const { value, iclass, onClick, disabled } = this.props

    return (

      <li className={iclass} disabled={disabled}>
        <a style={{cursor: "pointer"}} onClick={(event) => onClick(event)}>
          {value}
        </a>
      </li>

    )

  }

}

export default PaginationLabel