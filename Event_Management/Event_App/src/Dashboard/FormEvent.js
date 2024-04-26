import React, { Component } from 'react'
import axios from 'axios';

export class FormEvent extends Component {
  constructor(props)
  { super(props)
   this.state={
        name:" ",
        des:" ",
        photo:" ",
        fees:0,
        id:9
    }
}
 changName=(e)=>{
     e.preventDefault();
     this.setState({name:e.target.value});
 }    
 changDes=(e)=>{
    e.preventDefault();
    this.setState({des:e.target.value});
}  
changPhoto=(e)=>{
    e.preventDefault();
    this.setState({photo:e.target.value});
}  
changId=(e)=>{
    e.preventDefault();
    this.setState({id:e.target.value});
}  
changFees=(e)=>{
    e.preventDefault();
    this.setState({fees:e.target.value});
}  
OnSubmit=(e)=>{
    
    axios.post('/createevent',{
        name:this.state.name,
        description:this.state.des,
        fees:this.state.fees,
        photo:this.state.photo,
        id:this.state.id

    }).then(res=>{
        
       const v=this.props["props"];
      v["history"].push('/admindashboard');
    })
}

    render() {
        return (
            <div style={{margin:"40px"}}>
                <h3>Event Details</h3>

            <div style={{marginTop:"50px"}} >
             <form>
                 <label for="Event name"></label>
                 <input type="text"  placeholder="name" onChange={this.changName} />
                 <label for="Event name"></label>

                 <input type="text"  placeholder="photo" style={{marginLeft:"40px"}}/>
             </form>
            </div>
            <div style={{marginTop:"50px"}}>
            <form>
                 <label for="Event name"></label>
                 <input type="number"  placeholder="id" onChange={this.changId} />
                 <label for="Event name"></label>

                 <input type="text" placeholder="details" style={{marginLeft:"40px"}} onChange={this.changDes}/>
             </form>
            </div>
            <div style={{marginTop:"50px"}}>
            <form>
                 <label for="Event name"></label>
                 <input type="number" placeholder="fees"  onChange={this.changFees}/>
                 
                 
             </form>
             <button style={{marginTop:"30px",border:"none"}} onClick={this.OnSubmit}>Submit</button>
            </div>
            </div>
        )
    }
}

export default FormEvent
