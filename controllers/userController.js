const userModel = require('../models/user')

function add(req, res){
    userModel.create({...req.body},(err,userData)=>{
        if(!err) return res.status(201).json(userData);
        res.status(500).json({Error:"DB error"});
    })

    console.log(req.body);
}

function list(req,res){
    let users =[]
    userModel.find({},(err, data)=>{
        users = data
        if(!err) return res.status(201).json(users);
        res.status(500).json({Error:"DB error"});
        
    })
}


function getById(req,res){
    const {id}= req.params
    userModel.findById(id , (err ,data)=>{
        user =data
    if (!err) return res.status(200).json(user)
    res.status(500).json({Error : "DB_error"})          
    }) 
}

function remove(req , res) {
    const {id}= req.params
    userModel.findByIdAndDelete(id , (err)=>{
        if (!err){
            res.send( "deleted");
        }
        else{
            console.log(err);
        }
     }) 
}


function edit(req , res) {
    const {id}= req.params
    let {firstName} = req.body
    let {lastName} =  req.body
    let {age} =  req.body
    let {email} =  req.body
    let {password} =  req.body
    userModel.findByIdAndUpdate(id , {firstName , lastName , age ,email,password }  , (err)=>{
        if (!err){
            userModel.findById(id ,(err,data)=>{
                if (!err) return res.status(201).json(data)
                    console.log(err)
                    res.status(500).json({Error : "DB_error"})
            })
        }
        else{
            console.log(err);
        }
     })

}

module.exports = {add , list , getById , remove ,edit}