
const tools =[
    {"id": 1, "name": "Hummer1"},
    {"id": 2, "name": "Hummer2"},
    {"id": 3, "name": "Hummer3"},
    {"id": 4, "name": "Hummer4"},
    {"id": 5, "name": "Hummer5"},
]
module.exports.getAllTools =(req,res,next)=>{
    res.send(tools)
}

module.exports.saveATool = (req,res)=>{
    console.log(req.body);
    tools.push(req.body)
    res.send(tools)
}

module.exports.getToolDetail =(req,res)=>{
    const {id} =req.params
    // const filter = {_id: id}
    const foundTool = tools.find(tool => tool.id == id)
    res.send(foundTool)
}