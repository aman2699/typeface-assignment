import { connect } from "react-redux";
import React, {  useEffect } from "react";
import "./chat.scss";
import { getChatMessages } from "../../store/app/action";
import MessageList from "../../components/MessageList";
import MessageBox from "../../components/MessageBox";

const Chat = ({ getChatMessages, chatMessages, openChat }) => {
  useEffect(() => {
    getChatMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (chatMessages.length === 0) return null;

  return (
    <div className="main">
      <div className="container">
        <MessageList />
        {openChat && <MessageBox />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    chatMessages: state.app.chatMessages,
    openChat: state.app.openChat,
  };
};

const mapDispatchToProps = {
  getChatMessages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
