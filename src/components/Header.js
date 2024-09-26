import React from 'react';

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <h2 className="navbar-item" href="#">Admin Dashboard</h2>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Users</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Settings</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;