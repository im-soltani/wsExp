
const express=require("express")
let  users=require("../Data")
const router=express.Router()

//affichage list users
router.get("/",(req,res)=>{
    
res.send(users)
})

//add new user

router.post("/add",(req,res)=>{
const newUser={...req.body,id:Math.random()}
users.push(newUser)
res.send({msg:"user added !",users})
})
//delete
router.delete("/:index",(req,res)=>{
    const id=req.params.index

    users=users.filter((el)=>(el.id != id))
    res.send({msg:"user deleted",users})
})

router.put("/:index",(req,res)=>{
    const id=req.params.index
    let userToEdit=users.find((el)=>(el.id == id))
    let editedUser={...userToEdit,...req.body}
    users=users.map((el)=>( el.id ==id ?editedUser : el))
    res.send({msg:"user edited !",users})
})
module.exports=router