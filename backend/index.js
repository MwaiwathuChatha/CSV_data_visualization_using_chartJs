import express, { response } from "express";
import { port, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { graph } from "./models/dashboardData.js";

const app=express();

app.use(express.json());
app.get('/',(req,res)=>{
  console.log(req);
  return res.status(234).send('Hey there');
})

//Route to save a new JSON file to be displayed on dashboard
app.post('/graphs', async (req,res)=>{
try{

  if(
    !req.body.title||
    !req.body.owner||
    !req.body.publishYear
  ){
    return res.status(400).send({
        message: 'Send all required fields: title, owner, publishYear',
    });
  }

  const newGragh={
    title:req.body.title,
    owner:req.body.owner,
    publishYear:req.body.publishYear, 
  };

  const Graph= await graph.create(newGragh);
  return res.status(201).send(Graph);
}catch(error){
    console.log(error.message);
    res.status(500).send({message:error.message});
}
});

//route to get resource from database
app.get('/graphs', async(req,res)=>
{
  try {
     const Graphs = await graph.find({});
     return res.status(200).json(Graphs);
  }catch(error){
    console.log(error.message);
    res.status(500).send({message:error.message});
  }
}
)





mongoose.connect(mongoDBURL).then(()=>{
    console.log('Connection to database successful');
    app.listen(port,()=>{
        console.log(`App is listening on port: ${port}`);})
    }).catch((error)=>{
        console.error(error);
});