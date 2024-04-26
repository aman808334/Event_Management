import React ,{createContext,useState, Component}from 'react'

export const AuthContext=createContext('default');
class  AuthContextProvider extends Component{
    state = {
        users: 
                {
                  
                },
        searchString: '',
        isAuth:false,
        name:'aditya',
        color1:'red'
      }
     toogleAuth=(v)=>{
        console.log(this.state.isAuth) 
       this.setState({isAuth:!this.state.isAuth})
       console.log(this.state.isAuth)
    }
     setValue=(detail)=>{
    
     this.setState({users:detail})
     localStorage.setItem('user',JSON.stringify(detail))
      
    }
    changeColor=()=>
    {
        this.setState({color1:"green"})
    }
    render()
    {
    return (
    <AuthContext.Provider value={{...this.state,setValue:this.setValue,toogleAuth:this.toogleAuth,changeColor:this.changeColor}
    }>
        {this.props.children}
    </AuthContext.Provider>
    )
}
}
export default AuthContextProvider;