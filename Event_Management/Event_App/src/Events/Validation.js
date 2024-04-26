import React, { Component } from 'react'
import NavBar1 from '../components/NavBar1'

export class Validation extends Component {
    render() {
        return (
            <div style={{justifyContent:"center",textAlign:"center"}}>
                <NavBar1></NavBar1>
                <h1 style={{color:"purple",fontWeight:"normal",marginTop:"30px",fontSize:"24px"}}>Thank You For Registartion Hope You will enjoy it.</h1>
                <h2 style={{color:"gray",fontWeight:"normal"}}>SKDKJ4NANAN</h2>
                <h4>Your Secret code</h4>
                <div className="Qr">
                
                </div>
                <h3>This Is The Qr U nedd During Event</h3>
            </div>

        )
    }
}

export default Validation
