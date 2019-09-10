import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          alt=""
          src="https://66.media.tumblr.com/ade16e5cc8c181f48eea8cc9df228ef7/tumblr_oxvrdbxwh01tpjc42o2_1280.png"
        />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
