const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnect");
const toolsRouter = require('./routes/tools.route.js');
const userRouter =require("./routes/user.Route.js")
const errorHandler = require("./middleware/errorHandler");
const { connectToServer } = require("./utils/dbConnect");

app.use(cors());
app.use(express.json());
app.use(express.static('public'))
app.set('view engine', "ejs")
// app.use(viewCount)



// dbConnect()
connectToServer( (err)=>{
    if(!err){
      app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
      });
    }else{
      console.log(err);
    } 
});

app.use('/api/v1/tools', toolsRouter)
// app.use('/api/v1/user', userRouter)

app.get("/", (req, res) => {
  // res.sendFile(__dirname + "/public/test.html");
  res.render("home.ejs",{
    id: 5,
    user : {
       name: "Thi is a test"
    }
  })
});
app.all("/", (req,res)=>{
  res.send('no route found')
})

app.use(errorHandler)

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


// Database or server related issue hole app ta ke close kore deoya project er shes e rakhte hoy  
process.on("unhandledRejection",(error)=>{
  console.log(error.name, error.message);
  app.close(()=>{
    process.exit(1);
  });
});
