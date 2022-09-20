import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav class="navbar bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Navbar</a>
                    <form class="d-flex" role="search">
                        <div style={{ display: 'flex', width: "25vw", textAlign: "center" }}>
                            <Link className="nav-link" aria-current="page" to="#">About</Link>
                            <Link className="nav-link" to="#">Contact Us</Link>
                            <Link className="nav-link" to="#">Buy Coffee</Link>
                        </div>
                        <div style={{ display: 'flex', gap: "10px" }}>
                            <button class="btn btn-outline-warning" type="submit"><Link to="events" className='link-btn'>Join Event</Link></button>
                            <button class="btn btn-outline-warning" type="submit"><Link to="login" className='link-btn'>Add Event</Link></button>
                        </div>
                    </form>
                </div>
            </nav>

        </>
    )
}

export default NavBar;