import React, { Component } from 'react';

class Menssages extends Component {
  state = {
    newMessage: '',
    title: ['Facebook'],
    messages: [],
  };

  handleInputChange = e => {
    this.setState({ newMessage: e.target.value });
  }

  render() {
    return (
      <>
        { this.state.title.map(message => <h1 width="max-content" key={message}>{message}</h1>)}
        <h2>Messages</h2>
        <h3>
      {this.state.newMessage}
        <input type="text" onChange={this.handleInputChange} />
        </h3>
      </>
    );
  }
}

export default Menssages;