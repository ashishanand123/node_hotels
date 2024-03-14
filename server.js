const express = require('express')
const app = express()
const db =require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json())


const person=require('./models/person')

app.get('/', function (req, res) {
  res.send('Hello World')
})

//post route to add a person

app.post('/person', async(req,res)=> {
     
  try{
    const data=req.body  //Assuming the request body contains the person data

    //Create a new person document using the mongoose model
    const newPerson = await new person(data);
     
    //save the new person to the database
    const response =await newPerson.save();
    console.log('data saved')
    res.status(200).json(response);
     

  }catch(err){
    console.log(err)
    res.status(500).json({error:'Internal server Error'});

  }

  
    })
  



app.listen(3500,()=>{
    console.log('listening on port 3000');
});