import React from "react";
import s from "./Friend.module.css";




const Friend = props => {

    return (
    <div className={s.item}>
      <img
        alt=""
        src="http://simpleicon.com/wp-content/uploads/user1.png"
      />
      <div>
       {props.name}
      </div>
    </div>
  );
};

export default Friend;
