import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'
import Paginator from '../src/Paginator'
import expect from 'expect'

describe("Paginator", () => {
  let component;

  beforeEach(() => {
    component = ReactTestUtils.renderIntoDocument(
      <Paginator>
        <p>Test</p>
      </Paginator>
    )
  })

  it("should render", () => {
    expect(ReactDOM.findDOMNode(component).className).toEqual("paginator")
  })

})