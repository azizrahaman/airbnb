import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/Card";

export default function App() {
    return (
        <div className="app--container">
            <Navbar />
            <Hero />
            <Card />
        </div>
    )
}