const express=require("express")
const router=express.Router()
let users=require("../Data")
const { v4: uuid_v4 } = require('uuid');


router.get("/",(req,res)=>{
    res.send(users)
})

router.post("/add",(req,res)=>{
    let newUser={...req.body,id:uuid_v4()}
users.push(newUser)
res.send({msg:"user added !",users})
})

router.delete("/:id",(req,res)=>{
    const id=req.params.id
    users=users.filter((el)=>(el.id != id))
    res.send({msg:"user deleted" ,users})
})

module.exports=router