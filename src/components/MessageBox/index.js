import { connect } from "react-redux";
import React, { useState } from "react";
import "./messageBox.scss";
import ChatCard from "./messageCard";
import { ReactComponent as SendButton } from "../../assets/img/sendButton.svg";
import { sendMessage } from "../../store/app";
import { ReactComponent as Avatar } from "../../assets/img/avtar.svg";

const MessageBox = ({ chatMessages, currentChatId, sendMessage }) => {
  const [value, setValue] = useState("");

  const onSendClick = () => {
    if (value === "") return;
    const message = {
      message: value,
      sender: "USER",
      timestamp: Date.now(),
      messageType: "text",
    };
    sendMessage(message);
    setValue("")
  };

  const onChange = (e) => {
    setValue(e.target.value.trimStart());
  };
  return (
    <div className="message-box">
      <div className="header">
        <span className="thumb">
          <Avatar />
        </span>
        <span className="title">{chatMessages[currentChatId].name} </span>
      </div>
      <div className="chat-list">
        {chatMessages[currentChatId].messageList &&
        chatMessages[currentChatId]?.messageList?.length > 0 ? (
          chatMessages[currentChatId]?.messageList?.map((element, index) => (
            <ChatCard key={index} message={element} />
          ))
        ) : (
          <div className="no-Data">Send a message to start chatting</div>
        )}
      </div>
      <div className="chat-footer">
        <span className="input">
          <input
            type="text"
            placeholder="Type a Message"
            onChange={(e) => onChange(e)}
            value={value}
          ></input>
        </span>
        <span className="send" onClick={() => onSendClick()}>
          <SendButton />
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    chatMessages: state.app.chatMessages,
    currentChatId: state.app.currentChatId,
  };
};

const mapDispatchToProps = {
  sendMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox);
