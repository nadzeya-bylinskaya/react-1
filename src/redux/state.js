let rerenderEntireTree = () => {
  console.log("state is changed");
};

let state = {
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
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const addMessage = message => {
  let newMessage = {
    id: 3,
    message: message
  };
  state.dialogsPage.messages.push(newMessage);
  rerenderEntireTree(state);
};

export const updateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = observer => {
  rerenderEntireTree = observer;
};

export default state;
