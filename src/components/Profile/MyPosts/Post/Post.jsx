import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div className={s.item}>
      <img
        alt=""
        src="https://static.tvtropes.org/pmwiki/pub/images/c1586442e6baf67de61427431f47f683.png"
      />
      {props.message}

      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
