import React, { Component } from 'react';

class Menssages extends Component {
  state = {
    newMessage: '',
    messages: ['Facebook']
  };

  handleInputChange = e => {
    console.log(e.target.value); 
  }

  render() {
    return (
      <>
        { this.state.messages.map(message => <h1 width="max-content" key={message}>{message}</h1>)}
        <h2>Messages</h2>
        <input type="text" onChange={this.handleInputChange} />
      </>
    );
  }
}

export default Menssages;