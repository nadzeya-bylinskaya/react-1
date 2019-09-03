import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  let state = props.store.getState().profilePage;
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={state.posts}
        newPostText={state.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
