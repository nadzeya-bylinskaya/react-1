let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 2 },
      { id: 2, message: "It's my first post", likesCount: 7 }
    ]
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

export let addPost = postMessage => {

  let newPost = {
    id: 3,
    message: postMessage,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
};

export default state;
