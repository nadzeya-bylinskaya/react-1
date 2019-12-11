const SEND_MESSAGE = "SEND-MESSAGE";

let initialStore = {
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Victor" },
    { id: 6, name: "Valery" }
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Cool" },
    { id: 4, message: "Yeah!!" },
    { id: 5, message: "Nevermind!" }
  ]
};

const dialogsReducer = (state = initialStore, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }]
      };
    default:
      return state;
  }
};
export const sendMessageCreator = newMessageBody => ({
  type: SEND_MESSAGE,
  newMessageBody
});

export default dialogsReducer;
