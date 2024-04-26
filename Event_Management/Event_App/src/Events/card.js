import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EventDes from './EventDes';
import {useHistory} from 'react-router-dom'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const value=props.detail
  let history=useHistory()
  const changeRoute=()=>{
      console.log(value)
      history.push('/detail',{value:value,})
  }
  const changeRegister=()=>{
    console.log("hshshhshs ")
    history.push('/register',{value:value,})
}
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1591348369448-97f47485089d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title={value['name']}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
             {value['name']}
                     </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Registartion Fees: {value['fees']}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"  onClick={changeRoute}>
          Know more
        </Button>
        <Button size="small" color="primary" onClick={changeRegister} >
          Register
        </Button>
      </CardActions>
    </Card>
  );
}