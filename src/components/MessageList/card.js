import { connect } from "react-redux";
import React from "react";
import "./messagelist.scss";
import { setOpenChat, setCurrentChatID } from "../../store/app";
import { ReactComponent as Avatar } from "../../assets/img/avtar.svg";

const Card = ({
  details,
  index,
  setOpenChat,
  setCurrentChatID,
  currentChatId,
  searchVal,
  chatMessages,
}) => {
  const onChatClick = () => {
    setCurrentChatID(index);
    setOpenChat(true);
  };


  const hideCard = () => {
    if (
      searchVal === "" ||
      details.title.toLowerCase().includes(searchVal.toLowerCase()) ||
      details.orderId.toLowerCase().includes(searchVal.toLowerCase())
    )
      return false;
    return true;
  };

  const lastMessage = () => {
    if (
      chatMessages &&
      chatMessages.length &&
      chatMessages[index] &&
      chatMessages[index].messageList &&
      chatMessages[index].messageList.length &&
      chatMessages[index].messageList[
        chatMessages[index].messageList.length - 1
      ]
    ) {
      return chatMessages[index].messageList[
        chatMessages[index].messageList.length - 1
      ].message;
    }
    return "";
  };

  // const getTime =() =>{
  //   const d = new Date(details.latestMessageTimestamp)
  //   return `${d.getHours()}:${d.getMinutes()}`
  // }

  return (
    <div
      className={`message-card ${currentChatId === index ? "active" : ""} ${
        hideCard() ? "hide" : ""
      }`}
      key={details.id}
      onClick={() => onChatClick()}
    >
      <span className="thumb">
        <Avatar />
      </span>
      <span className="details">
        <span className="title">{details.name}</span>
        <span className="orderID">{lastMessage()}</span>
      </span>
      <span className="date">
        {new Date(details.latestMessageTimestamp).toLocaleDateString()}
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentChatId: state.app.currentChatId,
    chatMessages: state.app.chatMessages,
  };
};

const mapDispatchToProps = {
  setOpenChat,
  setCurrentChatID,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
