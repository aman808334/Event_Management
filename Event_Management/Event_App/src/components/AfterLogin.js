import React, { Component } from 'react'
import Alert from './Alert';
import NavBar1 from './NavBar1';
import Main from './Main';
import Main2 from './Main2';
import Main3 from './Main3';
import Main4 from './Main4';
import Main5 from './Main5';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import EventsDetail from '../Events/EventsDetail';
import BeforeLogin from './BeforeLogin';

export class AfterLogin extends Component {
    render() {
        return (
            <div>
          
             <Alert />
                
                <NavBar1 />
               
                <Main />
                <Main2 />
                <Main3 />
                <Main4 />
                <Main5 />
           
            </div>
        )
    }
}

export default AfterLogin
