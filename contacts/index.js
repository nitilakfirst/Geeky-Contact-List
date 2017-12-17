const express =require('express')
const app = express.Router()
//data
let contactList = [
    {id: 0, name: 'Ned Stark', email: 'ned@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Winter is coming.'},
    {id: 1, name: 'Theon Greyjoy', email: 'tgreyjoy@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Reluctant to pay iron price.'},
    {id: 2, name: 'Samwell Tarly', email: 'starly@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Loyal brother of the watch.'},
    {id: 3, name: 'Jon Snow', email: 'jsnow@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Knows nothing.'},
    {id: 4, name: 'Arya Stark', email: 'waterdancer@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Has a list of names.'},
    {id: 5, name: 'Jora Mormont', email: 'khaleesifan100@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Lost in the friend-zone.'},
    {id: 6, name: 'Tyrion Lannister', email: 'tyrion@lannister.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Currently drunk.'},
    {id: 7, name: 'Stannis Baratheon', email: 'onetrueking@dragonstone.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Nobody expects the Stannish inquisition.'},
    {id: 8, name: 'Hodor', email: 'hodor@hodor.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Hodor? Hodor... Hodor!'},
    {id: 9, name: 'Margaery Tyrell', email: 'mtyrell@highgarden.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Keeper of kings.'},
    {id: 10, name: 'Brienne of Tarth', email: 'oathkeeper@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not cross her.'},
    {id: 11, name: 'Petyr Baelish', email: 'petyr@baelishindustries.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not trust anyone.'},
  ]
//getall&getname-58160081
app.get('/contacts',(req,res)=>{
    let found=0
    let data
    if(req.query.name){
        for(let i=0;i<contactList.length;i++){
            if(req.query.name==contactList[i].name){
                data=contactList[i]
                found++
            }
        }
        if(found>0){
            res.json(data)//get name
            console.log(data.name)
        }
        else{
            res.json("notfound")
            console.log("notfound")
        }
    }
    else{
        res.json(contactList)//getall
        console.log("GetAllSuccess")
    }
})
//getid-58160081
app.get('/contacts/:id',(req,res)=>{
    let found=0
    let data
    for(let i=0;i<contactList.length;i++){
        if(req.params.id==contactList[i].id){
            data=contactList[i]
            found++
        }
    }
    if(found>0){
        res.json(data)//get id
        console.log(data.id)
    }
    else{
        res.json("notfound")
        console.log("notfound")
    }
})
//post-58160079
app.post('/contacts',(req,res)=>{
    contactList.push(req.body)//post
    res.status(201).json(req.body)
    console.log("PostSuccess")
})
module.exports= app