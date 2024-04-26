import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";


const Side = props => {


    return (
        <>
        
            <Nav className=" d-none d-md-block bg-light sidebar" style={{marginTop:"0px"}}
                activeKey="/home"
            >
                <h4 style={{fontWeight:"normal",marginTop:"0px"}}>Hello Aman</h4>
                <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                
            </form>
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Nav.Link href="/admindashboard ">DashBoard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/adminhome">MyEvents</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/createevent">Create Events</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/attendance">Attendance marker</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/loginadmin">Home</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Settings
                </Nav.Link>
                </Nav.Item>
            </Nav>

        </>
    );
};
const Sidebar = withRouter(Side);
export default Sidebar