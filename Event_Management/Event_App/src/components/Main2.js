import React, { Component } from 'react'

export class Main2 extends Component {
    render() {
        return (
            <div style={{ justifyContent: "center", marginTop: "70px", textAlign: "center" }}>
                <h4 style={{ color: "purple" }}>HOW IT WORKS</h4>
                <br></br>
                <h1>Event planning and management. Simplified</h1>
                <br>
                </br>
                <h4 style={{ fontWeight: "normal" }}>Our event planning platform will offer you the tools you need to design memorable</h4>
                <h4 style={{ marginTop: "0px", fontWeight: "normal" }}>experiences and run <strong>successful events.</strong> Here’s how it works.</h4>
                <div style={{ width: "1200px", height: "400px", marginLeft: "100px", display: "flex", flexDirection: "row" }}>


                    <div className="card" style={{ display: "flex", flexDirection: "column", height: "300px", width: "300px", margin: "15px" }}>
                        <img src="https://image.shutterstock.com/image-photo/event-management-concept-meeting-white-260nw-647550292.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card" style={{ display: "flex", flexDirection: "column", height: "300px", width: "300px", margin: "15px" }}>
                        <img src="https://image.shutterstock.com/image-photo/event-management-concept-meeting-white-260nw-647550292.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card" style={{ display: "flex", flexDirection: "column", height: "300px", width: "300px", margin: "15px" }}>
                        <img src="https://image.shutterstock.com/image-photo/event-management-concept-meeting-white-260nw-647550292.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card" style={{ display: "flex", flexDirection: "column", height: "300px", width: "300px", margin: "15px" }}>
                        <img src="https://image.shutterstock.com/image-photo/event-management-concept-meeting-white-260nw-647550292.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Main2
