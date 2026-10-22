import React from "react";

export default function Info() {
  return (
    <header className="info">
      <img
        className="profile-photo"
        src="../images/rahmat_rafli.png"
        alt="Foto profil Rahmat Rafli"
      />
      <h1>Rahmat Rafli</h1>
      <p className="job-title">Fullstack Developer</p>
      <a className="website" href="https://rahmatrafli.my.id" target="_blank">
        Rahmat Rafli Website
      </a>
      <a className="email-button" href="mailto:rahmatrafli1@gmail.com">
        <span aria-hidden="true">
          <img src="../images/mail.svg" />
        </span>
        Email
      </a>
    </header>
  );
}
