import React from 'react'
import { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { purple } from '@material-ui/core/colors';

export class about extends Component {

    render() {

        return (

            <div className="aboutpage">

                <h1 style={{color:"purple",paddingBottom:"10px"}}>  ABOUT US </h1>

                <p>
                    <strong>
                        The purpose of Event Management System is to automate the existing manual system by the help of computerized equipments and full-fledged computer software fulfilling their requirements, so that their valuable data/information can be stored for longer period with easy accessing and manipulation of the same. The required software and hardware are easily available and easy to work with.
                    </strong>
                </p>
                <p>
                    <strong>
                        Event Management System, described above, can lead to error free, secure, reliable and fast management system. It can assist the user to concentrate on their other activities rather to concentrate on the record keeping. Thus it will help organization in better utilization of resources. The organization can maintain computerized records without redundant entries. That means that one need not be distracted by information that is not relevant, while being able to reach the information.
                    </strong>
                </p>
                <p>
                    <strong>
                        The aim is to automate its existing manual system by the help of computerized equipment and full-fledged computer software fulfilling their requirements, so that their valuable data/information can be stored for longer period with easy accessing and manipulation of the same. Basically the project describes how to manage for good performance and better services for the clients.
                    </strong>
                </p>

                <h1 style={{color:"purple",paddingBottom:"10px"}} >  Team Members -</h1>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<a href="https://www.linkpicture.com/view.php?img=LPic627787d08934e1879582276"><img src="https://www.linkpicture.com/q/Sarthak.jpeg" type="image" height="200"width="200"/></a>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <a href="https://www.linkpicture.com/view.php?img=LPic627787d08934e1879582276"><img src="https://www.linkpicture.com/q/Aniket.jpeg" type="image" height="200"width="200"/></a>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <a href="https://www.linkpicture.com/view.php?img=LPic627787d08934e1879582276"><img src="https://www.linkpicture.com/q/Aman.jpeg" type="image" height="200"width="200"/></a>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<br></br>
   &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<strong>Sarthak Thakur</strong>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<strong>Aniket Sen</strong>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<strong>Aman Kumar</strong>
            </div>

        );
    }
}
export default withRouter(about);
