import React from 'react'
import { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { purple } from '@material-ui/core/colors';

export class contact extends Component {

    render(){

        return(

                <div>

<h1 style={{color:"purple",paddingTop:"10px"}}>Contact Information -</h1> 
<h4 style={{paddingTop:"20px"}}>Email - abc@example.com</h4> 
  <img src="https://img.icons8.com/bubbles/100/000000/new-post.png"/> 
  <h4>Phone - +977888888888</h4> 
  <img src="https://img.icons8.com/bubbles/100/000000/phone.png"/> 
  <h4>Address - Birgunj (Nepal)</h4> 
  <img src="https://img.icons8.com/bubbles/100/000000/map-marker.png"></img>




  <h2 style={{color:"purple",paddingBottom:"10px"}}>You can also connect on Social media -</h2>
   <a href="https://www.facebook.com/aniket.sen.3133" target="blank"> <img border="0" alt="Facebook" src="https://img.icons8.com/bubbles/100/000000/facebook.png" width="100" height="100" />
    </a> <a href="https://instagram.com/_.aman3?igshid=YmMyMTA2M2Y=.aman3?igshid=YmMyMTA2M2Y=" target="_blank"> <img border="0" alt="Facebook" src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" width="100" height="100"/>
     </a> <a href="https://twitter.com/amankum25037473?t=UDvHvPPhHZbTNE9c-flQOg&amp;s=09" target="_blank"> <img border="0" alt="Facebook" src="https://img.icons8.com/bubbles/100/000000/twitter.png" width="100" height="100"/> </a> 
                </div>
        );
    }
}
export default withRouter(contact);
