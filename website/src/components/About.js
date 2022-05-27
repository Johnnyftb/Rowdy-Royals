import React from 'react';

export default function About({windowWidth}) {
    return(
        <section className="about bg-dark" id="about">
            <div className="container p-5 d-flex flex-lg-row flex-column justify-content-between align-items-center text-light text-varela">
                <div className='desc'>
                    <h1 className='text-warning display-4'>Become a King or Queen in Web3</h1>
                    <p className="lead">Rowdy Royals is an NFT collection on the Ethereum blockchain based around the theme of royalty. Each item is of ERC-721 token standard, verifying ownership and granting you access to the Rowdy Royals ecosystem. </p>
                    <p className="lead">Each Rowdy Royals owner is entitled to special and exclusive benefits, including access to our upcoming NFT game.  </p>
                </div>
                <img src={`/images/nfts/6.jpg`} alt="" className={`img-fluid rounded-circle m-2 ${windowWidth > 992 ? "h-75" : "w-100"}`} />
            </div>
        </section>
    )
    
}