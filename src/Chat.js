import React, { Component } from "react";
import { IonApp, IonContent } from "@ionic/react";
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

    const { id, name, email, image } = JSON.parse(localStorage.getItem("user"));

    this.client = new StreamChat(process.env.REACT_APP_STREAM_API_KEY);
    this.client.setUser(
      {
        id,
        name,
        email,
        image
      },
      localStorage.getItem("token")
    );

    this.channel = this.client.channel("messaging", "ionic-nd73j", {
      image: "https://i.imgur.com/gwaMDJZ.png",
      name: "Ionic Chat"
    });
  }

  render() {
    return (
      <IonApp>
        <IonContent>
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
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
