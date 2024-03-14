const mongoose =require('mongoose');

const mongoURL="mongodb://127.0.0.1:27017/hotels" 

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
        useUnifiedTopology: true
})

const db=mongoose.connection;


db.on('connected', ()=> {
    console.log('conected to Mongodb server')
})
db.on('error', ()=> {
    console.log('Mongodb connection error:',err)
})
db.on('disconnected', ()=> {
    console.log('Mongodb disconnected')
})
module.exports=db;