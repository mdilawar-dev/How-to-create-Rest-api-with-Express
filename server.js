const express = require('express')
const errorhandler = require('errorhandler')
const logger= require('morgan')
const bodyparser =require('body-parser')
const errorHandler = require('errorhandler')
let sucess ="successfully deleted";
let store = { }
store.accounts =[];

let app = express();
app.use(bodyparser.json())
app.use(logger('dev'))
app.use(errorhandler())
 //this will get the account
app.get('/accounts',(req, res)=>{

    res.status(200).send(store.accounts)
})
// this will send the details
app.post('/accounts',(req,res)=>{
    let newAccount = req.body;
    let id = store.accounts.length
    store.accounts.push(newAccount)
    res.status(201).send({id:id})
})
 //this will update the account
app.put('/accounts/:id',(req,res)=>{
    store.accounts[req.params.id]= req.body
    res.status(200).send(store.accounts[req.params.id])
})
 //this will delete the account ..
app.delete('/accounts/:id',(req,res) =>{
    store.accounts.splice(req.params.id, 1)
    res.status(204).send()
})


app.listen(3000) //this will listen on port 30000