import React, { Component } from 'react'

export class Main5 extends Component {
    render() {
        return (
            <div className="Contact" style={{justifyContent:"left",textAlign:"center",marginTop:"30px",marginBottom:"100px"}}>
                <h1 style={{color:"purple",fontWeight:"normal"}}>Get In Touch</h1>
                <p style={{color:"gray"}}>Feel Free To Reach Out To Us Conatct Us</p>
                <form >
                    <textarea rows="5" cols="100" style={{color:"gray",fontWeight:"normal"}}className="boo">Type your Meassage Here</textarea>
                    <br/>
                <input type="email" placeholder="email"  style={{marginRight:"10px",border:"purple bold"}}className="boo"/>
                <input type="text"  placeholder="name" style={{marginRight:"10px"}} className="boo" />
                <input type="submit" placeholder="send"  value="Send" style={{backgroundColor:"gray",width:"80px"}} />
                </form>
                <spacer></spacer>
                <h1 style={{color:"Purple",fontWeight:"normal",marginTop:"60px"}}>Let'S Write a liitle story about why we want our</h1>
                <h2 style={{color:"Purple",fontWeight:"normal"}}>users to download our app</h2>
                <button type="button" class="btn btn-secondary">Download App</button>
            </div>
        )
    }
}

export default Main5 
