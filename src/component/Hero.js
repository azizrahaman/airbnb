import React from "react";
import "../style.css";

export default function Hero() {
    return (
        <div className="hero--container">
            <div className="hero-container-logo">
                <img src={require('../images/hero.png')} alt="Hero" />
            </div>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--details">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}