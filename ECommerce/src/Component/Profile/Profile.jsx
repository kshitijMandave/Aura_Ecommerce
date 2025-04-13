import React from "react";
import "./Profile.css";
import profileImg from "./img/profile-img.png";
const Profile = () => {
  return (
    <section className="profile">
      <div className="profile-container">
        <div className="left">
          <img src={profileImg} alt="Profile" height="150px" width="150px" />
        </div>
        <div className="right">
          <dl>
            <dt>
              <b>Username</b>
            </dt>
            <dd>Ana D </dd>
            <br />
            <dt>
              <b>Mobile Number</b>
            </dt>
            <dd>8888888888</dd>
            <br />
            <dt>
              <b>Email ID</b>
            </dt>
            <dd>anad8888@gmail.com</dd>
            <br />
            <dt>
              <b>Location</b>
            </dt>
            <dd>-</dd>
            <br />
            <dt>
              <b>Alternate Mobile</b>
            </dt>
            <dd>-</dd>
            <br />
            <dt>
              <b>Hint Name</b>
            </dt>
            <dd>-</dd>
          </dl>
          <br />
          <button>EDIT</button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
