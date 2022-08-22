import React from "react";
import "../style.css";

export default function Card() {
    return (
        <div className="card--container">
            <img src={require('../images/profile.png')} alt="profile" />
            <div className="card--rating">
                <img src={require('../images/star.png')} alt="profile" />
                <span>5.0 </span><span className="card-rating-gray">(6) ■ USA</span>
            </div>
            <p className="card--detais">Life lessons with Katie Zaferes</p>
            <span className="card--amount">From $136 / </span><span>Person</span>
        </div>
    )
}