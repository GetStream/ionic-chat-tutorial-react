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
</Chat>;
