import React from 'react'

export default class Paginator extends React.Component {

  static defaultProps = {
    perPage: 1
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
      numberOfPages: Math.ceil(nextProps.children.length / nextProps.perPage),
      start_index: 0,
      end_index: nextProps.perPage
    })
  }

  listOfPages() {
    let list = []
    for (let i = 1; i <= this.state.numberOfPages; i++) {
      list.push(
        <li key={i} className={(i === this.state.currentPage) ? "active" : ""}>
          <a onClick={this.goTo.bind(this, i)}>{i}</a>
        </li>
      )
    }
    return list
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

    return (
      <div className="paginator">
        <div className="row">
          {React.Children.toArray(this.props.children).slice(start_index, end_index)}
        </div>

        <ul className="pagination">
          <li className={(currentPage === 1) ? "disabled" : ""}>
            <a onClick={this.prevPage.bind(this)}><i className="glyphicon glyphicon-chevron-left"></i></a>
          </li>

          {this.listOfPages()}

          <li className={(currentPage === numberOfPages) ? "disabled" : ""}>
            <a onClick={this.nextPage.bind(this)}><i className="glyphicon glyphicon-chevron-right"></i></a>
          </li>
        </ul>
      </div>
    )
  }

}