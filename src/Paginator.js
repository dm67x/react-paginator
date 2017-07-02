import React from 'react'

export default class Paginator extends React.Component {

  static defaultProps = {
    perPage: 1,
    bsClass: "pagination",
    prevIcon: null,
    nextIcon: null,
    liClass: null,
    showOnly: 5
  }

  constructor(props) {
    super(props)

    this.state = {
      currentPage: 1,
      numberOfPages: Math.ceil(React.Children.count(this.props.children) / this.props.perPage),
      start_index: 0,
      end_index: props.perPage
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentPage: 1,
      numberOfPages: Math.ceil(React.Children.count(nextProps.children.length) / nextProps.perPage),
      start_index: 0,
      end_index: nextProps.perPage
    })
  }

  listOfPages() {
    let list = []
    for (let i = 1; i <= this.state.numberOfPages; i++) {
      list.push(
        <li key={i} className={(i === this.state.currentPage) ? "active" : this.props.liClass}>
          <a onClick={this.goTo.bind(this, i)}>{i}</a>
        </li>
      )
    }
    return list
  }

  showListOfPages() {
    let list = this.listOfPages()

    const { showOnly, liClass } = this.props
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
        <li key={0} className={liClass}>
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
      this.setState(prevState => ({
        currentPage: page,
        start_index: (page - 1) * this.props.perPage,
        end_index: (page - 1) * this.props.perPage + this.props.perPage
      }))
    }
  }

  nextPage(event) {
    event.preventDefault()
    if (this.state.currentPage < this.state.numberOfPages) {
      this.setState(prevState => ({
        currentPage: prevState.currentPage + 1,
        start_index: prevState.start_index + this.props.perPage,
        end_index: prevState.end_index + this.props.perPage
      }))
    }
  }

  prevPage(event) {
    event.preventDefault()
    if (this.state.currentPage > 1) {
      this.setState(prevState => ({
        currentPage: prevState.currentPage - 1,
        start_index: prevState.start_index - this.props.perPage,
        end_index: prevState.end_index - this.props.perPage
      }))
    }
  }

  render() {

    const { start_index, end_index, currentPage, numberOfPages } = this.state
    const { bsClass, children, nextIcon, prevIcon, liClass } = this.props

    return (
      <div className="paginator">
        <div className="row">
          {React.Children.toArray(children).slice(start_index, end_index)}
        </div>

        <ul className={bsClass}>
          <li className={(currentPage === 1) ? "disabled" : liClass}>
            <a onClick={this.prevPage.bind(this)}>{prevIcon}</a>
          </li>

          {this.showListOfPages()}

          <li className={(currentPage === numberOfPages) ? "disabled" : liClass}>
            <a onClick={this.nextPage.bind(this)}>{nextIcon}</a>
          </li>
        </ul>
      </div>
    )
  }

}