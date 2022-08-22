import React from "react";
import "../style.css";

export default function Navbar() {
    return (
        <div className="nav--container">
            <nav className="navbar">
                <img src={require("../images/logo.png")} alt="Logo" />
            </nav>
        </div>
    )
}