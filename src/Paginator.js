import React from 'react'
import PropTypes from 'prop-types'

class Paginator extends React.Component {

  static defaultProps = {
    bsClass: "pagination"
  }

  static propTypes = {
    bsClass: PropTypes.string,
    children: PropTypes.node.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {

    const { bsClass, children } = this.props

    return (

      <ul className={bsClass}>

        {this.props.children}

      </ul>
    )
  }

}

export default Paginator