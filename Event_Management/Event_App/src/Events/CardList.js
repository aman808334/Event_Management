import React, { Component } from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import MediaCard from './card'
export class CardList extends Component {
  state={
      cardlist:[],
  }
    componentDidMount()
    {
        axios.get('/events').then(res=>{
            const  data=res['data'];
            //console.log(data);
           this.setState({cardlist:data})
           //console.log(this.state.cardlist)            
        })
    }
    render() {
        const value=this.state.cardlist;
        const valu1=value.map((d)=>{
            return(
              <Grid style={{margin:"40px"}}>
               <MediaCard  detail={d}/>
              </Grid>
            );
        })
        return (
                <Grid container>
                    {valu1}
                </Grid>
        )
    }
}

export default CardList
