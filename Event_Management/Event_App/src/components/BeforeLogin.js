import React, { Component } from 'react'
import Alert from './Alert';
import NavBar from './NavBar';
import Main from './Main';
import Main2 from './Main2';
import Main3 from './Main3';
import Main4 from './Main4';
import Main5 from './Main5';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AfterLogin from './AfterLogin';
import EventsDetail from '../Events/EventsDetail';

export class BeforeLogin extends Component {
    render() {
        return (
            <div>
                
               
               
                <Alert />
                <NavBar />
                <Main />
                <Main2 />
                <Main3 />
                <Main4 />
                <Main5 />
                
            </div>
        )
    }
}

export default BeforeLogin
