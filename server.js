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

app.get('/accounts',(req, res)=>{

    res.status(200).send(store.accounts)
})

app.post('/accounts',(req,res)=>{
    let newAccount = req.body;
    let id = store.accounts.length
    store.accounts.push(newAccount)
    res.status(201).send({id:id})
})

app.put('/accounts/:id',(req,res)=>{
    store.accounts[req.params.id]= req.body
    res.status(200).send(store.accounts[req.params.id])
})

app.delete('/accounts/:id',(req,res) =>{
    store.accounts.splice(req.params.id, 1)
    res.status(204).send()
})


app.listen(3000)