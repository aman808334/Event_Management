import React, { Component } from 'react'

export class Main3 extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#f9f6fa", height: "700px", textAlign: "center" }}>

                <h4 style={{ color: "purple", paddingTop: "50px", fontWeight: "normal" }}>Our Solutions</h4>
                <br></br>
                <h1>Easy event software built</h1>
                <h1>for you and your team</h1>
                <br></br>
                <p>No matter what your professional background is, Eventtia will help you accomplish your tasks,</p>
                <h4 style={{ fontWeight: "normal", fontSize: "14px", marginTop: "0px" }}>even if you've never planned an event before.</h4>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className="card" style={{width: "18rem",margin:"30px"}}>
                        <div class="card-body">
                            <h5 className="card-title">Event Mangement</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem",margin:"30px"}}>
                        <div class="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem",margin:"30px"}}>
                        <div class="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem",margin:"30px"}}>
                        <div class="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    
                </div>
            </div>
        )
    }
}

export default Main3
