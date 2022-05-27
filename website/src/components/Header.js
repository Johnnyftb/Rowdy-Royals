import React from 'react';

export default function Header() {

    return (
        <section className="header">
            <div className="container pt-5 px-5 text-dark d-flex flex-column justify-content-end align-items-center text-varela">
                <h1 className="text-light display-2">Rowdy Royals</h1>
                <button className="btn bg-primary rounded-pill text-light btn-lg px-5">Minting Soon</button>
                <img src="/images/home-cover.png" alt="" className="h-75" />
            </div>
        </section>
    )
}