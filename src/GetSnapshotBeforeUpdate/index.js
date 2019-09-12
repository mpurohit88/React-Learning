import React from 'react';

import ChatsTest from './Chats';

export default class Chats extends React.Component {
  constructor() {
    super()

    this.state = {
      chatList: ["Hey", "Hello", "Hi"]
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.state.chatList > prevState.chatList) {
      const chatThreadRef = this.chatThreadRef.current;
      return chatThreadRef.scrollHeight - chatThreadRef.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const chatThreadRef = this.chatThreadRef.current;
      chatThreadRef.scrollTop = chatThreadRef.scrollHeight - snapshot;
    }

    //GetNewState();
  }

  render() {
    return (
      <ul className="chat-thread">
        <ChatsTest chatList={this.state.chatList} />
      </ul>
    );
  }
}