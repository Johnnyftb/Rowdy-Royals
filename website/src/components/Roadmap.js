export default function Roadmap() {

    return (
        <section className="roadmap" id="roadmap">
            <div className="container p-5 text-center text-light text-varela">
                <h1>Roadmap</h1>
                <div className="d-flex row justify-content-around text-light">
                    <div className="col-lg-3 col-10 card m-4 shadow bg-primary border-none p-2">
                        <img src="/images/icons/crown.png" alt="" className="w-50 mx-auto img-fluid" />
                        <h3 className="card-title fw-bold mt-1 mb-0">Mint Sale</h3>
                        <p className="my-0">Phase 1</p>
                        <div className="card-body">
                            <p className="lead my-3">Mint sale of 5000 pieces</p>
                            <p className="lead my-3">Convertible giveaway, charity donations, influencer promotions, and many community giveaways!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-10 card m-4 shadow bg-primary border-none p-2">
                        <img src="/images/icons/medal.png" alt="" className="w-50 mx-auto img-fluid" />
                        <h3 className="card-title fw-bold mt-1 mb-0">Reveal and Giveaway Winners</h3>
                        <p className="my-0">Phase 2</p>
                        <div className="card-body">
                            <p className="lead my-3">NFT reveal</p>
                            <p className="lead my-3">Giveaway winners announced!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-10 card m-4 shadow bg-primary border-none p-2">
                        <img src="/images/icons/console.png" alt="" className="w-50 mx-auto img-fluid" />
                        <h3 className="card-title fw-bold mt-1 mb-0">NFT Game</h3>
                        <p className="my-0">Phase 3</p>
                        <div className="card-body">
                            <p className="lead my-3">Rowdy Royals NFT metaverse video game released</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-10 card m-4 shadow bg-primary border-none p-2">
                        <img src="/images/icons/dollar.png" alt="" className="w-50 mx-auto img-fluid" />
                        <h3 className="card-title fw-bold mt-1 mb-0">Staking</h3>
                        <p className="my-0">Phase 4</p>
                        <div className="card-body">
                            <p className="lead my-3">Royals staking is released to acquire $ROYAL token</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-10 card m-4 shadow bg-primary border-none p-2">
                        <img src="/images/icons/web-development.png" alt="" className="w-50 mx-auto img-fluid" />
                        <h3 className="card-title fw-bold mt-1 mb-0">Game Development</h3>
                        <p className="my-0">Phase 5</p>
                        <div className="card-body">
                            <p className="lead my-3">Continous NFT video game development</p>
                            <p className="lead my-3">Further features include free roam, battle royal, and 1v1 modes!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}