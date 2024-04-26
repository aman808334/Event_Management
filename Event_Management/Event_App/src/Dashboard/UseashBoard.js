import React, { Component } from 'react'
import NavBar1 from '../components/NavBar1'
import axios from 'axios';

export class UseashBoard extends Component {

    state={
        Events:[],
    }
    componentDidMount()
    {
       const v=JSON.parse(localStorage.getItem('user'));
      axios.get("user/"+v["_id"]).then(res=>{
         const v1=res["data"][0];
         this.setState({Events:v1["Events"]});
      })
     
        
    }
    render() {
       console.log(this.state.Events);
        var ans=this.state.Events.map((a,i)=>
        {
            return(
             <div style={{display:"flex",flexDirection:"row",margin:"30px"}}>
                 <div style={{display:"flex",flexDirection:"column",width:"33%",}} className="div15">
                  
                 </div>
                 <div style={{display:"flex",flexDirection:"column",width:"33%"}}>
                  <h1 style={{color:"purple",fontSize:"26px",fontWeight:"normal"}}>EVENT {a["name"]}</h1> 
                  <h1 style={{color:"purple",fontSize:"26px",fontWeight:"normal"}}>Secret Code:{a["code"]}</h1>
                  <h1 style={{color:"purple",fontSize:"26px",fontWeight:"normal"}}>Reg fees:{a["fees"]}</h1>
                  <h1 style={{color:"purple",fontSize:"26px",fontWeight:"normal"}}>Id:{a["id"]}</h1>
                  
                 </div>
                 <div style={{display:"flex",flexDirection:"column",width:"33%",padding:"30px",}}>
               
                 <label>Attendance Marked</label>
                 <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                
                 </div>
                 

             </div>
            )
        })
        return (
            <div >
                <NavBar1></NavBar1>
                <h1 style={{marginLeft:"580px",fontWeight:"normal",fontSize:"32px",marginTop:"20px"}}>USER DASHBOARD</h1>
                {ans}
            </div>
        )
    }
}

export default UseashBoard
