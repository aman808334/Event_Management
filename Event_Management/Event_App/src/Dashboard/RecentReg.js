import React, { Component } from 'react'

export class RecentReg extends Component {
    render() {
       var arr=[
           {
               name:"Aditya",
               date:"12/7/2000",
               no:"+91-928282828",
               location:"Newyork",
           },
           {
            name:"Aditya",
            date:"12/7/2000",
            no:"+91-928282828",
            location:"Newyork",
        },
        {
            name:"Aditya",
            date:"12/7/2000",
            no:"+91-928282828",
            location:"Newyork",
        }, {
            name:"Aditya",
            date:"12/7/2000",
            no:"+91-928282828",
            location:"Newyork",
        },
        {
            name:"Aditya",
            date:"12/7/2000",
            no:"+91-928282828",
            location:"Newyork",
        }
       ]
       var ans=arr.map((a)=>{
        return (
            <div style={{display:"flex",flexDirection:"row",margin:"20px"}}>
                <div style={{display:"flex",flexDirection:"column",width:"25%"}}>
                    <h4>Name: {a["name"]}</h4>
                </div>
                <div style={{display:"flex",flexDirection:"column",width:"25%"}}>
                <h4>Date: {a["date"]}</h4>
                </div>
                <div style={{display:"flex",flexDirection:"column",width:"25%"}}>
                <h4>Phone no: {a["no"]}</h4>
                </div>
                <div style={{display:"flex",flexDirection:"column",width:"25%",marginLeft:"10px"}}>
                <h4>Location: {a["location"]}</h4>
                </div>
                <div style={{display:"flex",flexDirection:"column",width:"25%"}}>
                    <form>
                        <button>Details</button>
                    </form>
                </div>
            </div>

        )
       } 
       )
        return (
            <div style={{border:"gary solid"}}>
                {ans}
            </div>
        )
    }
}

export default RecentReg
