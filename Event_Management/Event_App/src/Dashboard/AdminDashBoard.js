import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Bar1 from './BarChart'
import Sidebar from "./SideBar";
import CardGrps from "./CardGrps";
import PieChart from "./PieChart";
import RecentReg from "./RecentReg";
const Dash = props => {


    return (
        <div>
        <div style={{display:"flex",flexDirection:"row"}}>

            <Sidebar style={{display:"flex",flexDirection:"column",width:"100px"}}></Sidebar>
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "350px",marginTop:"40px" ,width:"80%",height:"170px"}}>

                <div style={{ marginLeft:"50px",display: "flex", flexDirection: "column"}} className="card1">
                    <h3 style={{fontWeight:"normal",paddingTop:"60px"}}>Total Events: 1000</h3>
                </div>

                <div style={{marginLeft:"50px", display: "flex", flexDirection: "column"}} className="card1">
                <h3 style={{fontWeight:"normal",paddingTop:"60px"}}>Total Income: $1000</h3> 
                </div>

                <div style={{ marginLeft:"50px",display: "flex", flexDirection: "column" }} className="card1">
                <h3 style={{fontWeight:"normal",paddingTop:"60px"}}>Total Veiws: 1000</h3>
                </div>

            </div>
            <br></br>
            

            </div>
            <div style={{display:"flex",flexDirection:"row",width:"800px",marginLeft:"300px"}}>

                <div style={{display:"flex",flexDirection:"column", width:"900px"}}>
                    <Bar1></Bar1>
                </div>
                <div style={{display:"flex",flexDirection:"column", width:"600px",height:"400px"}}>
                    <h2 style={{color:"gray",fontWeight:"normal"}}>Contribution To Income</h2>
                    <PieChart></PieChart>
                </div>

            </div>
            <div style={{border:"gray solid"}}>
                <RecentReg></RecentReg>
            </div>
            </div>
        );
  };
  const Dashboard = withRouter(Dash);
  export default Dashboard