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
        <ul>
          { this.state.messages.map(message => <header width="max-content" key={message}>{message}</header>)}
        </ul>
        <h1>Messages</h1>
        <input type="text" onChange={this.handleInputChange} />
      </>
    );
  }
}

export default Menssages;