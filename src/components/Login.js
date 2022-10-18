import React from "react";
import './stylee.scss';
import Authentication from "./Authentication";

export default function Login() {
  const handleClick = async () => {
    window.location.href = Authentication.AUTHORIZATION_URL;
  };
  return (
    <main className="login-container">
      <img className="jeff"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
        alt="spotify" /><h2 className="lite">Lite</h2>

      <button className = "jaafar" onClick={handleClick}>Login</button>
    </main >
  );
}

