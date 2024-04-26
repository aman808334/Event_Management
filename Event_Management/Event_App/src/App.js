import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Alert from './components/Alert';
import Main2 from './components/Main2';
import Main3 from './components/Main3';
import Main4 from './components/Main4';
import Main5 from './components/Main5';
import contact  from './components/contact';
import about  from './components/about';
import BeforeLogin from './components/BeforeLogin';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AfterLogin from './components/AfterLogin';
import EventsDetail from './Events/EventsDetail';
import EventRegister from './Events/EventRegister';
import EventDes from './Events/EventDes';
import Validation from './Events/Validation';
import UseashBoard from './Dashboard/UseashBoard';
import LoginPage from './components/LoginPage';
import AdminLoginPage from './components/AdminLoginPage';
import AdminDashBoard from './Dashboard/AdminDashBoard';
import Dashboard from './Dashboard/AdminDashBoard';
import Dashboard1 from './Dashboard/AdminHome';
import CreateEvent from './Dashboard/CreateEvent';
import AttendanceMarker from './Dashboard/AttendanceMarker'
import Signup from './components/Signup';
import { AuthContext } from './contexts/authcontext';
import AuthContextProvider from './contexts/authcontext'

function App() {
  return (
    <div className="App">
      
      <Router  >
        <AuthContextProvider>
        <Route exact path="/" render={props=><BeforeLogin {...props} />}></Route>
        <Route path="/login" render={props=><AfterLogin {...props} />}></Route>
        <Route path="/eventsdetail" component={EventsDetail}></Route>
        <Route path="/register" render={props=><EventRegister {...props} />}></Route>
        <Route  path="/detail" component={EventDes}></Route>
        <Route path="/validation" component={Validation}></Route>
        <Route path="/dashboard" component={UseashBoard}></Route>
        <Route path="/loginPage" render={props=><LoginPage {...props} />}></Route>
        <Route path="/loginadmin" component={AdminLoginPage}></Route>
        <Route path="/admindashboard" component={Dashboard}></Route>
        <Route path="/adminhome" component={Dashboard1}></Route>
        <Route path="/createevent" render={props=><CreateEvent {...props} />}></Route>
        <Route path="/attendance" component={AttendanceMarker}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/contact" component={contact}></Route>
        <Route path="/about" component={about}></Route>

        </AuthContextProvider>
      </Router>
  

    </div>
  );
}

export default App;
