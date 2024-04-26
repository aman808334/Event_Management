import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../contexts/authcontext';
export class LoginPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    redirect: ''

  }
  componentDidMount()
  {
    
    //console.log(this.state.redirect)
  }
  static contextType=AuthContext

  parseJwt = (token) => {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }
  GetDeatils = (det) => {
    axios.get('/user/' + det).then(res => {
      const data1 = res['data'];
      const data2 = data1[0];
      if (data2['isAdmin'] == true) {
       const {user,toogleAuth,isAuth,setValue,name}=this.context;
       setValue(data2);
       toogleAuth(true)
       console.log(user)
       console.log(name)
        this.props.history.push('/loginadmin')

      }
      else {//setAns(data2)
        //setValue(data2)
        //toogleAuth();
        // console.log(state);

        const {user,toogleAuth,isAuth,setValue,changeColor,color1}=this.context;
        setValue(data2);
      
        changeColor();
        console.log(color1);
        //console.log(user)
     this.props.history.push('/login')
      }
    }
    )
  }

  OnClick = (e) => {

    e.preventDefault();
    
    axios.post('/signin', {
      email: this.state.email,
      password: this.state.password,

    }).then(res => {
      const data = res['data'];
      //console.log(data['token'])
      const object = this.parseJwt(data['token'])
      this.GetDeatils(object['_id'])
      //history.push('/login')
    })
  }
  render() {
    const {user,setValue,toogleAuth,isAuth,name,color1,changeColor}=this.context
    //console.log(user);

    return (
      <div style={{ marginTop: "70px", marginLeft: "570px", marginRight: "700px", textAlign: "center" }}>
        <h1>Login</h1>
        <Form >
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">Email</Label>
            <Input type="text" name="email" id="exampleEmail" placeholder="something@idk.cool" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">Password</Label>
            <Input type="text" name="password" id="examplePassword" placeholder="don't tell!" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />

          </FormGroup>
          <button style={{ marginTop: "20px", width: "100px" }} onClick={this.OnClick}>Click</button>

        </Form>
        <form method="get" action="/signup" style={{ marginTop: "30px" }}>
          <input type="submit" value="Create Account" />
        </form>
        

      </div>
    );

  }
}
export default withRouter(LoginPage)
