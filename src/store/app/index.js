import { createSlice } from "@reduxjs/toolkit";

const app = createSlice({
  name: "app",
  initialState: {
    chatMessages: [],
    openChat: false,
    currentChatId: -1,
  },
  reducers: {
    setChatMessages(state, action) {
      state.chatMessages = [...action.payload];
    },
    setOpenChat(state, action) {
      state.openChat = action.payload;
    },
    setCurrentChatID(state, action) {
      state.currentChatId = action.payload;
    },
    sendMessage(state, action) {
      let payload = state.chatMessages[state.currentChatId];
      payload.latestMessageTimestamp = Date.now();
      let messageList = payload.messageList;
      payload.messageList = [...messageList, action.payload];
      state.chatMessages[state.currentChatId] = payload;
      let messages = [...state.chatMessages];
      messages.sort((a, b) => {
        if (a.latestMessageTimestamp > b.latestMessageTimestamp) return -1;
        if (a.latestMessageTimestamp < b.latestMessageTimestamp) return 1;
        return 0;
      });
      state.currentChatId =0;
      state.chatMessages=[...messages]
    },
  },
});

export default app.reducer;

export const { setChatMessages, setOpenChat, setCurrentChatID, sendMessage } =
  app.actions;
