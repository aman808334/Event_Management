import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
const Signup = (props) => {
  const [name, setName] = useState('')
  const [email, setMail] = useState('')
  const [password, setPass] = useState('')
  const [isAdmin,setAdmin]=useState(false)
  let history=useHistory()
  const OnClick=(e)=>{
    
      e.preventDefault();
      console.log(email)
      console.log(password)
    axios.post('/signup',{
        email:email,
        password:password,
        isAdmin:isAdmin
    
    }).then(res=>{
        console.log(res);
        history.push('/loginPage')
    })
  }

  return (
      <div style={{marginTop:"100px",marginLeft:"370px",marginRight:"700px"}}>
    <Form >
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="text" name="email" id="exampleEmail" placeholder="something@idk.cool" value={email} onChange={(e)=>setMail(e.target.value)} />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="text" name="password" id="examplePassword" placeholder="don't tell!"value={password} onChange={(e)=>setPass(e.target.value)} />
       <label for="IsAdmin">Do u Want to be admin</label>
       <input type="checkbox" onChange={(e)=>setAdmin(!isAdmin)}></input>
      </FormGroup>
      <button style={{marginTop:"20px",width:"100px"}} onClick={OnClick}>Click</button>
     
    </Form>
    </div>
  );
}

export default Signup;