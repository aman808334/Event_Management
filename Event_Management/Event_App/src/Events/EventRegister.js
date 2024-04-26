import React, { Component ,useContext} from 'react'
import NavBar1 from '../components/NavBar1'
import { AuthContext } from '../contexts/authcontext';
import axios from 'axios';


class EventRegister extends Component {
    static contextType=AuthContext
    state={
        user:'',
        events:'',
    }
   

      
  RegisterRoute=(e)=>
   {e.preventDefault()
    const user=JSON.parse(localStorage.getItem('user'))
    this.setState({user:[...this.state.user,user]});
    const value=this.props.history.location.state;
    const value1=value['value'];

    this.setState({events:[...this.state.events,value1]})
    console.log(user);
    console.log(value1);
    const url="user/"+user["_id"]
    const data=value1["name"];
    const data1=value1["description"];
    const data2=value1["fees"];
    const data3=value1["id"];

    console.log(value1);
    axios.patch(url,{
        "Events":{"name":data,
                  "des":data1,
                  "fees":data2,
                  "id":data3,
                  "code":"666989898"
                   }
    }).then(res=>{
        console.log(res);
        this.props.history.push('/validation');
    })
   
   //setValue('')
   
    
   }
    render() {
        const {user,setValue,toogleAuth,isAuth}=this.context
        //console.log(user)
       
        return (
            <div style={{ justifyContent: "center" }}>
                <NavBar1>
    
                </NavBar1>
                <h1 style={{ textAlign: "center", color: "purple", fontWeight: "normal", marginTop: "20px" }}>Event Registration</h1>
    
                <div style={{marginLeft:"100px",marginRight:"100px",marginTop:"30px"}}>
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="form-group">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" class="form-control" id="inputCity" />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">State & UT</label>
                                <select id="inputState" class="form-control">
                                    <option>Andhra Pradesh</option>
                                    <option>Arunachal Pradesh</option>
                                    <option>Assam</option>
                                    <option>Bihar</option>
                                    <option>Chhattisgarh</option>
                                    <option>Goa</option>
                                    <option>Gujarat</option>
                                    <option>Haryana</option>
                                    <option>Himachal Pradesh</option>
                                    <option>Jharkhand</option>
                                    <option>Karnataka</option>
                                    <option>Kerala</option>
                                    <option>Madhya Pradesh</option>
                                    <option selected>Maharashtra</option>
                                    <option>Manipur</option>
                                    <option>Meghalaya</option>
                                    <option>Mizoram</option>
                                    <option>Nagaland</option>
                                    <option>Odisha</option>
                                    <option>Punjab</option>
                                    <option>Rajasthan</option>
                                    <option>Sikkim</option>
                                    <option>Tamil Nadu</option>
                                    <option>Telangana</option>
                                    <option>Tripura</option>
                                    <option>Uttar Pradesh</option>
                                    <option>Uttarakhand</option>
                                    <option>West Bengal</option>
                                    <option>Andaman & Nicobar</option>
                                    <option>Chandigarh</option>
                                    <option>Daman & Diu</option>
                                    <option>Delhi</option>
                                    <option>Jammu & Kashmir</option>
                                    <option>Ladakh</option>
                                    <option>Lakshadweep</option>
                                    <option>Puducherry</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" class="form-control" id="inputZip" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    I agree to all terms and conditions
                                               </label>
                            </div>
                        </div>
                        <form >
                        <button type="submit" class="btn btn-primary" style={{backgroundColor:"gray",width:"100px",border:"gray"}} onClick={this.RegisterRoute} >Register</button>
                        </form>
                        
                    </form>
                </div>
            </div >
        )
    }
}

export default EventRegister
