import React, { Component } from "react";
import { IonApp } from "@ionic/react";
import {
  Chat,
  Channel,
  ChannelHeader,
  Thread,
  Window,
  MessageList,
  MessageInput
} from "stream-chat-react";
import { StreamChat } from "stream-chat";

import "./App.css";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import "stream-chat-react/dist/css/index.css";
import "stream-chat-react/dist/css/index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.client = new StreamChat(process.env.REACT_APP_STREAM_API_KEY);

    this.client.setUser(
      {
        id: "nick-parsons",
        name: "Nick Parsons",
        image: "https://i.imgur.com/gwaMDJZ.png"
      },
      localStorage.getItem("token")
    );

    this.channel = this.client.channel("messaging", "ionic", {
      image: "https://i.imgur.com/gwaMDJZ.png",
      name: "Ionic Chat"
    });
  }

  render() {
    return (
      <IonApp>
        <Chat client={this.client} theme={"messaging light"}>
          <Channel channel={this.channel}>
            <Window>
              <ChannelHeader />
              <MessageList />
              <div className="footer">
                <MessageInput />
              </div>
            </Window>
            <Thread />
          </Channel>
        </Chat>
      </IonApp>
    );
  }
}

export default App;
