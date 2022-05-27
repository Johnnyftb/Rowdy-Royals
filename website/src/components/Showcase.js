import React from 'react';
import Navbar from "./Navbar";
import Header from "./Header";

export default function Showcase({windowWidth}) {

    return (
        <div className="showcase">
            <Navbar windowWidth={windowWidth} />
            <Header/>
        </div>
    )
}