import { connect } from "react-redux";
import React, { useState } from "react";
import "./messagelist.scss";
import Card from "./card";
import { ReactComponent as Avatar } from "../../assets/img/avtar.svg";

const MessageList = ({ chatMessages, openChat }) => {
  const [searchVal, setSearchVal] = useState("");

  const onChange = (e) => {
    setSearchVal(e.target.value.trimStart());
  };

  return (
    <div className={`message-list ${openChat ? "ChatOpen" : ""}`}>
      <div className="header">
        <div className="profile">
          <Avatar />
        </div>
      </div>
      <div className="searchBar">
        <div className="bar">
          <input
            type="text"
            placeholder="Search or start new chat"
            value={searchVal}
            onChange={(e) => onChange(e)}
          ></input>
        </div>
      </div>
      <div className="message-container">
        {chatMessages?.map((element, index) => (
          <Card
            key={index}
            details={element}
            index={index}
            searchVal={searchVal}
          />
        ))}
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
