import React from "react";
import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import SocialLinks from "./SocialLinks";

export default function BusinessCard() {
  return (
    <main className="business-card">
      <Info />
      <div className="card-content">
        <About />
        <Interests />
      </div>
      <SocialLinks />
    </main>
  );
}
