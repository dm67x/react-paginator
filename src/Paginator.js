import React from 'react'
import PropTypes from 'prop-types'

class Paginator extends React.Component {

  static defaultProps = {
    perPage: 1,
    bsClass: "pagination",
    prevIcon: null,
    nextIcon: null,
    pageClass: null,
    pageNextClass: null,
    pagePrevClass: null,
    blankClass: null,
    firstPageLabel: null,
    lastPageLabel: null,
    showOnly: 5,
    showPage: 1,
    onPageChanged: null,
    list: null
  }

  constructor(props) {
    super(props)

    this.state = {
      currentPage: props.showPage,
      numberOfPages: Math.ceil(React.Children.count(props.children) / props.perPage),
      start_index: (props.showPage - 1) * props.perPage,
      end_index: (props.showPage - 1) * props.perPage + props.perPage
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentPage: nextProps.showPage,
      numberOfPages: Math.ceil(React.Children.count(nextProps.children) / nextProps.perPage),
      start_index: (nextProps.showPage - 1) * nextProps.children,
      end_index: (nextProps.showPage - 1) * nextProps.children + nextProps.perPage
    })
  }

  listOfPages() {
    let list = []
    for (let i = 1; i <= this.state.numberOfPages; i++) {
      list.push(
        <li key={i} className={this.props.pageClass + " " + ((i === this.state.currentPage) ? "active" : "")}>
          <a style={{cursor: "pointer"}} onClick={this.goTo.bind(this, i)}>{i}</a>
        </li>
      )
    }
    return list
  }

  showListOfPages() {
    let list = this.listOfPages()

    const { showOnly, blankClass } = this.props
    const { numberOfPages, currentPage } = this.state

    let cond = numberOfPages - showOnly

    if (numberOfPages - (currentPage-1) > this.props.showOnly) {
      let current = []
      let i = currentPage
      let n = Math.floor(showOnly / 2)

      for (let x = 0; x < n; x++) {
        current.push(list[(i-1)+x])
      }

      current.push(
        <li key={0} className={blankClass}>
          <a>...</a>
        </li>
      )

      for (let x = n; x > 0; x--) {
        current.push(list[numberOfPages - x])
      }

      return current
    
    } else {
      return list.slice(cond, numberOfPages)
    }
  }

  goTo(page, event) {
    event.preventDefault()
    if (page > 0 && page <= this.state.numberOfPages) {
      this.setState((prevState, props) => {
        return {
          currentPage: page,
          start_index: (page - 1) * props.perPage,
          end_index: (page - 1) * props.perPage + props.perPage
        }
      })

      if (this.props.onPageChanged) this.props.onPageChanged(page)
    }
  }

  nextPage(event) {
    event.preventDefault()
    if (this.state.currentPage < this.state.numberOfPages) {
      this.setState((prevState, props) => {
        return {
          currentPage: prevState.currentPage + 1,
          start_index: prevState.start_index + props.perPage,
          end_index: prevState.end_index + props.perPage
        }
      })
      
      if (this.props.onPageChanged) this.props.onPageChanged(this.state.currentPage + 1)
    }
  }

  prevPage(event) {
    event.preventDefault()
    if (this.state.currentPage > 1) {
      this.setState((prevState, props) => {
        return {
          currentPage: prevState.currentPage - 1,
          start_index: prevState.start_index - props.perPage,
          end_index: prevState.end_index - props.perPage
        }
      })
      
      if (this.props.onPageChanged) this.props.onPageChanged(this.state.currentPage - 1)
    }
  }

  setPage(page) {
    this.setState({
      currentPage: page,
      start_index: (page - 1) * this.props.perPage,
      end_index: (page - 1) * this.props.perPage + this.props.perPage
    })
    
    if (this.props.onPageChanged) this.props.onPageChanged(page)
  }

  render() {

    const { start_index, end_index, currentPage, numberOfPages } = this.state
    const { 
      bsClass, 
      children, 
      nextIcon, 
      prevIcon, 
      pagePrevClass, 
      pageNextClass,
      firstPageLabel,
      lastPageLabel
    } = this.props

    return (
      <div className="paginator">
        {children.length > 1 && children.slice(start_index, end_index) || children}

        <div>
          {firstPageLabel}

          <ul className={bsClass}>

            <li className={pagePrevClass + " " + ((currentPage === 1) ? "disabled" : "")}>
              <a style={{cursor: "pointer"}} onClick={this.prevPage.bind(this)}>{prevIcon}</a>
            </li>

            {this.showListOfPages()}

            <li className={pageNextClass + " " + ((currentPage === numberOfPages) ? "disabled" : "")}>
              <a style={{cursor: "pointer"}} onClick={this.nextPage.bind(this)}>{nextIcon}</a>
            </li>

          </ul>

          {lastPageLabel}
        </div>
      </div>
    )
  }

}

Paginator.propTypes = {
  perPage: PropTypes.number,
  bsClass: PropTypes.string,
  prevIcon: PropTypes.node,
  nextIcon: PropTypes.node,
  pageClass: PropTypes.string,
  pageNextClass: PropTypes.string,
  pagePrevClass: PropTypes.string,
  blankClass: PropTypes.string,
  firstPageLabel: PropTypes.node,
  lastPageLabel: PropTypes.node,
  showOnly: PropTypes.number,
  showPage: PropTypes.number,
  onPageChanged: PropTypes.func
}

export default Paginator