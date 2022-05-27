import React from 'react';

const navItems = [
    {
        name: "About",
        link: "#about"
    },
    {
        name: "Roadmap",
        link: "#roadmap"
    },
    {
        name: "Team",
        link: "#team"
    },
]

const socials = [
    {
        name: "twitter",
        link: "#"
    },
    {
        name: "discord",
        link: "#"
    },
]

export default function Navbar({windowWidth}) {

    const [sidebar, setSidebar] = React.useState(false);

    function handleClick() {
        setSidebar((prev) => !prev);
    }

    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container px-3 py-2 d-flex justify-content-between align-items-center text-dark">
                <img src="/images/logo.png" alt="" className="img-fluid"/>
                {windowWidth > 992 ? (
                    <div className="d-flex ms-auto">
                        <ul className="page-links navbar-nav d-flex justify-content-center align-items-center rounded-pill border border-3 border-dark mx-3 text-varela">
                            {navItems.map((item) => {
                                return (
                                    <li className="nav-item p-0">
                                        <a href={item.link} className="nav-link text-dark p-0">
                                            <p className="fw-bold mt-3 mx-3" name={item.name}>{item.name}</p>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                        <ul className="navbar-nav d-flex justify-content-center align-items-center mx-3">
                            {socials.map((item) => {
                                return (
                                    <li className="nav-item">
                                        <a href={item.link} className="nav-link text-dark bg-light border border-3 border-dark rounded-circle mx-3">
                                            <i className={`fab fa-${item.name} fa-2x`}></i>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                ) : (
                    <i className={`fa fa-bars fa-2x bg-light border border-3 border-dark rounded-circle p-3 ${sidebar ? "rotate-plus-90 text-secondary" : "rotate-minus-90"}`} onClick={handleClick}></i>
                )}

                {windowWidth < 992 ? (
                    <section className={`dropdown bg-light text-varela rounded border border-dark border-3 shadow ${windowWidth > 576 ? "w-25" : "w-50"} m-2 ${sidebar ? "opacity-1 shadow" : "opacity-0 pe-none"}`}>
                        <div className="container p-3 text-center text-dark rounded">
                            <ul className="navbar-nav d-flex flex-column align-items-center">
                                {navItems.map((item) => {
                                    return (
                                        <li className="nav-item p-0">
                                            <a href={item.link} className="nav-link text-dark p-0">
                                                <p className="lead fw-bold mt-3 mx-3" name={item.name}>{item.name}</p>
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                            <ul className="navbar-nav d-flex flex-row justify-content-center align-items-center">
                                {socials.map((item) => {
                                    return (
                                        <li className="nav-item">
                                            <a href={item.link} className="nav-link text-dark m-3">
                                                <i className={`fab fa-${item.name} fa-2x`}></i>
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </section>
                ) : (<div></div>)}
            </div>
        </nav>
    )
}