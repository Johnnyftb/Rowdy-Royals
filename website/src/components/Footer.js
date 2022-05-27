export default function Footer() {

    return (
        <section className="footer bg-primary border-top">
            <div className="container p-3 d-flex flex-lg-row flex-column align-items-center justify-content-lg-around justify-content-center">
                <a href="/">
                    <img src="/images/logo.png" alt="" className="ms-3 my-2 img-fluid w-75" />
                </a>
                <div className="d-flex justify-content-center align-items-center">
                    <a href="https://twitter.com/rowdyroyalsnft">
                        <i className="fab fa-twitter fa-2x text-light mx-4"></i>
                    </a>
                    <a href="https://discord.gg/VKcPTPRBc2">
                        <i className="fab fa-discord fa-2x text-light mx-4"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}