const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "check this out!!", likesCount: 7 },
        { id: 2, message: "Hi, how are you?", likesCount: 2 },
        { id: 3, message: "It's my first post", likesCount: 7 }
      ],
      newPostText: ""
    },
    dialogsPage: {
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
        { id: 5, message: "Nevermind!" },
        { id: 6, message: "Lol" }
      ]
    },
    sidebar: {
      friends: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" }
      ]
    }
  },
  _callSubscriber() {
    console.log("state is changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  /* addPost() {
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  addMessage(message) {
    let newMessage = {
      id: 3,
      message: message
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },*/
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 3,
        message: action.message
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST
});
export const updateNewPostActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});
export const addMessageActionCreator = text => ({
  type: ADD_MESSAGE,
  message: text
});

export default store;
window.store = store;
