import React from "react";
import styles from "./Users.module.css";

let Users = props => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: "http://www.venmond.com/demo/vendroid/img/avatar/big.jpg",
        followed: true,
        fullName: "Arina",
        status: "let's have another toast to the girl almighty",
        location: { city: "Minsk", country: "Belarus" }
      },
      {
        id: 2,
        photoUrl:
          "https://stgpublicbrainstormwebnc.blob.core.windows.net/uploads-staging/cms/home/End_User_3.jpg",
        followed: true,
        fullName: "Olesya",
        status: "tryna find places to visit here",
        location: { city: "Odessa", country: "Ukraine" }
      },
      {
        id: 3,
        photoUrl:
          "https://wrappixel.com/demos/admin-templates/pixeladmin/plugins/images/users/1.jpg",
        followed: false,
        fullName: "Vyacheslav",
        status: "pls write to iamthegreatest@gmail.com",
        location: { city: "Toronto", country: "Canada" }
      }
    ]);
  }

  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="" className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>

            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
