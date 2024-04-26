import React, { Component } from 'react'

export class NavBar extends Component {
    render() {
        return (
            <div style={{marginTop:"0px"}}>
                <nav className="navbar navbar-expand-lg Nav">
                    <a className="eventia " href="/" style={{marginBottom:"30px"}}>eventtia</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/eventsdetail">Events</a>
                            </li>
                            
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Conatct Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/dashboard">Dashboard</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link m" href="/loginPage">Login</a>
                            </li>

                            <button className="btn1">Get Started</button>
                            
                        </ul>
                       
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
