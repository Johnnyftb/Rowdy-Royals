export default function Team() {

    return (
        <section className="team bg-dark" id="team">
            <div className="container p-5 text-light text-center text-varela">
                <h1>Team</h1>
                <div className="row justify-content-around align-items-center">
                    <div className="col-lg-3 col-10 card bg-primary border-none shadow p-2 m-3">
                        <img src="/images/nfts/8.jpg" alt="" className="img-fluid w-75 rounded-circle mx-auto" />
                        <h3 className="fw-bold mt-3 card-title">Stan</h3>
                        <p className="lead mt-0">Founder</p>
                    </div>
                    <div className="col-lg-3 col-10 card bg-primary border-none shadow p-2 m-3">
                        <img src="/images/nfts/7.jpg" alt="" className="img-fluid w-75 rounded-circle mx-auto" />
                        <h3 className="fw-bold mt-3 card-title">Kayceev</h3>
                        <p className="lead mt-0">Discord Manager</p>
                    </div>
                    <div className="col-lg-3 col-10 card bg-primary border-none shadow p-2 m-3">
                        <img src="/images/nfts/9.jpg" alt="" className="img-fluid w-75 rounded-circle mx-auto" />
                        <h3 className="fw-bold mt-3 card-title">Bakerboy</h3>
                        <p className="lead mt-0">Developer</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}