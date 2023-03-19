const { getDb } = require("../utils/dbConnect.js")

let tools =[
    {"id": 1, "name": "Hummer1"},
    {"id": 2, "name": "Hummer2"},
    {"id": 3, "name": "Hummer3"},
    {"id": 4, "name": "Hummer4"},
    {"id": 5, "name": "Hummer5"},
]
module.exports.getAllTools =(req,res,next)=>{
    res.send(tools)
}

module.exports.saveATool =async (req,res,next)=>{

   try{
    
    const db = getDb();
    const tool =req.body;

   const result =await db.collection("tools").insertOne(tool);
    console.log(result);
    res.send("Successful")

   }
   catch(error){
      next(error)
   }
}

module.exports.getToolDetail =(req,res)=>{
    const {id} =req.params
    // const filter = {_id: id}
    const foundTool = tools.find(tool => tool.id == id)
    res.status(200).send({
        success: true,
        message: "Success",
        data: foundTool
    })
    // res.status(500).send({
    //     success: false,
    //     error: "Internal server error"
    // })
}

module.exports.updateTool =(req,res)=>{
//   const newData= req.body;
  const {id} =req.params
  const filter = { _id: id };
  
   const newData = tools.find(tool => tool.id === Number(id))
   newData.id = id;
   newData.name = req.body.name;
   res.send(newData);
}

module.exports.deleteTool=(req,res)=>{
    const {id} =req.params
    const filter = {_id: id}

    tools = tools.filter(tool => tool.id !== Number(id))
    res.send(tools)
}