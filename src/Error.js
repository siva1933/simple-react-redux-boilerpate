import React from "react"

class ErrorCheck extends React.Component {

  state = {
    error: null,
    info: null
  }

  componentDidCatch(error, info) {
    console.log(error,
      info)
    this.setState({
      error,
      info
    })

  }

  render() {
    if (this.state.error) {
      return <div>
        <p>
          <b>
            This is an example of error boundaries in React 16.
            <br />
            <br />
            Click on the numbers to increase the counters.
            <br />
            The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
          </b>
        </p>
        <hr />
      </div>
    }
    return this.props.children
  }
}

export default ErrorCheck