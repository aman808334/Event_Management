import React, { Component } from 'react'

export class AttendanceMarker extends Component {
    render() {
        return (
            <div style={{ marginTop: "30px", textAlign: "center" }}>
                <h1>Attendance Marker</h1>
                <div style={{ justifyContent: "center" ,marginLeft:"600px",marginRight:"600px" }}>
                    <form>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                    <div role="separator" class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                            <input type="text" class="form-control" aria-label="Text input with dropdown button" />
                              </div>
                    </form>
                    <div>
                        <form method="get" action="/admindashboard">
                            <input  type="text" value="Secret Code"/>
                        </form>
                        <form style={{marginTop:"20px"}} method="get" action="/admindashboard">
                            <input  type="submit" value="SUBMIT"/>
                        </form>

                    </div>
                </div>
                </div>
        )
    }
}

export default AttendanceMarker
