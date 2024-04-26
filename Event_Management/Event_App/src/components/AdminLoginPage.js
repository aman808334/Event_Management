import React, { Component } from 'react'
import Alert from './Alert';
import NavBar2 from './NavBar2';
import Main from './Main';
import Main2 from './Main2';
import Main3 from './Main3';
import Main4 from './Main4';
import Main5 from './Main5';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import EventsDetail from '../Events/EventsDetail';
import BeforeLogin from './BeforeLogin';

export class AdminLoginPage extends Component {
    render() {
        return (
            <div>
                <Alert />
                
                <NavBar2 />
               
                <Main />
                <Main2 />
                <Main3 />
                <Main4 />
                <Main5 /> 
            </div>
        )
    }
}

export default AdminLoginPage
