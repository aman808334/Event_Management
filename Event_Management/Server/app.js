const express=require('express')
const mongoose=require('mongoose')
const app=express();
const bodyParser=require('body-parser')
const Event=require('./models/Events')
app.use(bodyParser.json())

//import routes
var cors = require('cors')
 
app.use(cors())



const {MONGOURI}=require('./key')


mongoose.connect(MONGOURI,{ useNewUrlParser: true, useUnifiedTopology: true });
//Mongo db connect
mongoose.connection.on('connected',()=>
{
    console.log("connected")
}),
mongoose.connection.on('error',()=>
{
    console.log("error")
})


require('./models/Events')
require('./models/User')
app.get('/',(req,res)=>
{
    res.send('We are at home');
})
app.use(require('./routes/events'))
app.use(require('./routes/auth'))


app.listen(5000);
