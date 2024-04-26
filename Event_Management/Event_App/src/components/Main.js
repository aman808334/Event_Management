import React, { Component } from 'react'

export class Main extends Component {
    render() {
        return (
            <div className="main">
            <div className="main1">
                <h1 className="h11">Event Management</h1>
                <h1 className="h22">Technology.</h1>
                <br></br>
                <h1 className="h22">Your Event Starts Here.</h1>
                <br></br>
               <p>If you want to plan an event, set up online registration,</p>
               <p>manage your guests lists, build a beautiful website,</p>
               <p>deploy a mobile app or more, our <strong style={{fontSize:"23px"}}>Event Management</strong></p>
               <p>Technology Has <strong style={{fontSize:"23px"}}>Covered</strong></p>
               <br></br>
               <div>
                   <button  className="btn2">Get Started</button>
                   <button className="btn3">Contact us</button>
               </div>
            </div>
            <div className="main2">
               
            </div>
            </div>
        )
    }
}

export default Main
