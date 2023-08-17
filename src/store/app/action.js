import { setChatMessages } from "./index";

const chat = [
  {
    id: 1,
    name: "Aman",
    imageURL:
      "https://rukminim1.flixcart.com/image/300/300/k0vbgy80pkrrdj/speaker/mobile-tablet-speaker/4/n/n/boat-stone-grenade-original-imafg96ffpnpgdv4.jpeg?q=90",
    latestMessageTimestamp: 1632205237669,
    messageList: [
      {
        messageId: "msg1",
        message: "Hi, what can I help you with?",
        timestamp: 1632205137669,
        sender: "BOT",
        messageType: "text",
      },
      {
        messageId: "msg2",
        message: "Need help with this order",
        timestamp: 1632205237669,
        sender: "USER",
        messageType: "text",
      },
    ],
  },
  {
    id: 2,
    name: "Suraj",
    imageURL:
      "https://rukminim1.flixcart.com/image/300/300/k547l3k0/watch/x/h/t/ft7001-fastag-original-imafnvj82funvjyp.jpeg?q=90",
    latestMessageTimestamp: 1632105237669,
    messageList: [],
  },
  {
    id: 3,
    name: "Anil",
    imageURL:
      "https://rukminim1.flixcart.com/www/300/300/promos/29/01/2019/84186c71-a505-46fa-a9cb-93e6e9382c47.png?q=90",
    latestMessageTimestamp: 1631105237669,
    messageList: [
      {
        messageId: "msg3",
        message: "Hi, what can I help you with?",
        timestamp: 1631105137669,
        sender: "BOT",
        messageType: "text",
      },
      {
        messageId: "msg4",
        message: "I want a callback",
        timestamp: 1631105237669,
        sender: "USER",
        messageType: "text",
      },
    ],
  },
  {
    id: 4,
    name: "Khushboo",
    imageURL:
      "https://rukminim1.flixcart.com/image/300/300/kmax8y80/mobile/o/4/z/note-10-mobhwasd2-redmi-original-imagf8hpzgar5mgs.jpeg?q=90",
    latestMessageTimestamp: 1630005237669,
    messageList: [
      {
        messageId: "msg5",
        message: "Hi, what can I help you with?",
        timestamp: 1629799837669,
        sender: "BOT",
        messageType: "text",
      },
      {
        messageId: "msg6",
        message: "I want a callback",
        timestamp: 1629799937669,
        sender: "USER",
        messageType: "text",
      },
      {
        messageId: "msg7",
        message: "Hi, what can I help you with?",
        timestamp: 1629899937669,
        sender: "BOT",
        messageType: "text",
      },
      {
        messageId: "msg8",
        message: "Need help with this order",
        timestamp: 1629999937669,
        sender: "USER",
        messageType: "text",
      },
      {
        messageId: "msg9",
        message: "Hi, what can I help you with?",
        timestamp: 1630000037669,
        sender: "BOT",
        messageType: "text",
      },
      {
        messageId: "msg10",
        message: "Need help with this order",
        timestamp: 1630001037669,
        sender: "USER",
        messageType: "text",
      },
      {
        messageId: "msg5",
        message: "Hi, what can I help you with?",
        timestamp: 1630002037669,
        sender: "BOT",
        messageType: "text",
      },
      {
        messageId: "msg6",
        message: "I want a callback",
        timestamp: 1630003037669,
        sender: "USER",
        messageType: "text",
      },
      {
        messageId: "msg11",
        message: "Hi, what can I help you with?",
        timestamp: 1630004037669,
        sender: "BOT",
        messageType: "text",
      },
      {
        messageId: "msg12",
        message: "Need help with this order",
        timestamp: 1630004137669,
        sender: "USER",
        messageType: "text",
      },
      {
        messageId: "msg13",
        message: "Hi, what can I help you with?",
        timestamp: 1630005137669,
        sender: "BOT",
        messageType: "text",
      },
      {
        messageId: "msg14",
        message: "Need help with this order",
        timestamp: 1630005237669,
        sender: "USER",
        messageType: "text",
      },
    ],
  },
  {
    id: 5,
    name: "Swati",
    imageURL:
      "https://rukminim1.flixcart.com/www/300/300/promos/21/08/2019/aac6c36a-fde8-4730-bfaa-52a0c87b6cff.jpg?q=90",
    latestMessageTimestamp: 1620005237669,
    messageList: [
      {
        messageId: "msg1",
        message: "Hi, what can I help you with?",
        timestamp: 1620001237669,
        sender: "BOT",
        messageType: "text",
      },
      {
        messageId: "msg2",
        message: "Need help with this order",
        timestamp: 1620005237669,
        sender: "USER",
        messageType: "text",
      },
    ],
  },
  {
    id: 6,
    name: "Tanu",
    imageURL:
      "https://rukminim1.flixcart.com/image/300/300/k65d18w0/shoe/v/f/h/6hgf-6-saczer-black-original-imafgf5tzfy7hhcd.jpeg?q=90",
    latestMessageTimestamp: 1598523369945,
    messageList: [],
  },
  {
    id: 7,
    name: "Ajay",
    imageURL:
      "https://rukminim1.flixcart.com/image/300/300/k9yjb0w0/mask-respirator/q/m/b/12540-black-l-wildcraft-original-imafrmy4xuzgm8sa.jpeg?q=90",
    latestMessageTimestamp: 1598517840547,
    messageList: [],
  },
  {
    id: 8,
    name: "Abhishek",
    imageURL:
      "https://rukminim1.flixcart.com/image/300/300/helmet/d/h/u/1067-1-vega-58-open-face-crux-original-imae2yyxghjgkfmw.jpeg?q=90",
    latestMessageTimestamp: 1590576854189,
    messageList: [],
  },
  {
    id: 9,
    name: "Pravesh",
    imageURL:
      "https://rukminim1.flixcart.com/image/300/300/k8ro3gw0/hand-wash-sanitizer/f/g/2/500-total-hand-sanitizer-bottle-lifebuoy-original-imafqpcsnxfb7qxr.jpeg?q=90",
    latestMessageTimestamp: 1589519579618,
    messageList: [],
  },
  {
    id: 10,
    name: "Prience",
    imageURL:
      "https://rukminim1.flixcart.com/image/300/300/kalecnk0/hand-wash-sanitizer/f/g/2/500-total-hand-sanitizer-bottle-lifebuoy-original-imafs4yfahvcag5v.jpeg?q=90",
    latestMessageTimestamp: 1589468548314,
    messageList: [],
  },
];

export const getChatMessages = (cb) => async (dispatch, store) => {
  dispatch(setChatMessages(chat));
  cb && cb();
};
