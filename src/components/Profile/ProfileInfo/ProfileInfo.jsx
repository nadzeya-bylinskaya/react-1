import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          alt=""
          src="https://66.media.tumblr.com/ade16e5cc8c181f48eea8cc9df228ef7/tumblr_oxvrdbxwh01tpjc42o2_1280.png"
        />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
