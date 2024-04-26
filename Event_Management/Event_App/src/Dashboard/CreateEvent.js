import React, { Component } from 'react'
import Sidebar from './SideBar'
import FormEvent from './FormEvent'

export class CreateEvent extends Component {
    render() {
        //console.log(this.props)
        return (
            <div style={{display:"flex",flexDirection:"row"}}>

                <Sidebar style={{display:"flex",flexDirection:"column"}}></Sidebar>
                <div style={{display:"flex",flexDirection:"column" ,marginLeft:"200px"}}>
                  <FormEvent props={this.props}></FormEvent>
                </div>
                
            </div>
        )
    }
}

export default CreateEvent
