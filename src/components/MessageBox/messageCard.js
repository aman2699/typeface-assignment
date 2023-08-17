import { connect } from "react-redux";
import React from "react";

const ChatCard = ({ message }) => {


  const getCleanTime = (timeStampMS) => {
    const weekDayList = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const monthList = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let timeLength = ("" + timeStampMS).length;
    if (timeLength === 10) {
      timeStampMS = timeStampMS * 1000;
    }
    let eventDate = new Date(timeStampMS);
    let day = weekDayList[eventDate.getDay()];
    let month = monthList[eventDate.getMonth()];
    let date = eventDate.getDate();
    let year = eventDate.getFullYear();
    let startHours = eventDate.getHours();
    let startMinutes = eventDate.getMinutes();
    let startSec = eventDate.getSeconds();
    const ampm = startHours >= 12 ? "PM" : "AM";
    startHours = startHours % 12;
    startHours = startHours ? startHours : 12;
    const minute = startMinutes < 10 ? "0" + startMinutes : startMinutes;
    const hour = startHours < 10 ? "0" + startHours : startHours;
    const sec = startSec < 10 ? "0" + startSec : startSec;
    let retObj = { day, year, month, date, sec, minute, hour, ampm };
    return retObj;
  };

  const getTime = (ts) => {
    const time = getCleanTime(ts);
    return `${time.hour}:${time.minute} ${time.ampm}`;
  };

  return (
    <div
      className={`chat-card  ${
        message.messageType === "optionedMessage" ? "option" : ""
      }`}
    >
      {message.messageType === "text" ? (
        <div
          className={`text-card ${
            message.sender === "USER" ? "self" : "other"
          } `}
        >
          {message.message}
          <span className="ts">{getTime(message.timestamp)}</span>
        </div>
      ) : (
        <div className={`option-card `}>
          <div className="text">{message?.message}</div>
          {message?.options?.map((elem, index) => (
            <div className="option" key={index}>
              {elem.optionText}
              {elem.optionSubText && (
                <span className="subText">{elem.optionSubText}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChatCard);
