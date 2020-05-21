import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props) // This os to allow access to this.props in the constructor
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    console.log('AHHHHHHHHH!');
    this.setState({hasError: true});
  }
  
  render() {
    if (this.state.hasError) {
      console.log('ERRRRRRRRRR!');
      return <h1>Ooooops. This is not Good!!!</h1>
    }
    console.log(this.props);
    return this.props.children
  }
}

export default ErrorBoundry;