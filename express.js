const express=require("express")
const cors=require('cors')
const mongoose=require("mongoose")
const Collections=require('./')
const app=express();
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://niteeshsat:niteesh@cluster0.kqrrh.mongodb.net/?retryWrites=true&w=majority",{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("DB connected"))
const NewSchema=new mongoose.Schema({title:String,description:String})
const newModel=new mongoose.model("collection",NewSchema)
app.get("/",cors(),async (req,res)=>{newModel.find().then((r)=>res.send(r))})
app.post("/add",cors(),async (req,res)=>{
    const {title,description}=req.body;
    const data=new newModel({title,description})
    data.save()
})
app.delete("/delete/:id",cors(),async (req,res)=>{
    try{
        await newModel.findByIdAndDelete(req.params.id).then(()=>res.send("deleted")).then(console.log("deleted data"))
    }catch{
        console.log("Error")
    }
})
app.listen(4000,()=>{console.log("server is running")})