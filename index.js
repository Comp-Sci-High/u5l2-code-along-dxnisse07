const express = require("express");
// import your mongoose
const mongoose = require("mongoose");

// install your mongoose

const app = express();
app.use(express.json())


app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// create a studentSchema with name, grade, advisory, and fav subject
const studentSchema = new mongoose.Schema({
name: {type: String, required: true},
grade: {type: Number, default: 9},
favSub: {type: String}
});

// create a route hanlder for /g12 that returns every student in grade 12
async function startServer(){
await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.zztfj.mongodb.net/CSHStudents?retryWrites=true&w=majority&appName=Cluster0")

// const me =await new Student({
// name: "Denisse",
// grade: 12,
// favSub:"Ap Bio"
// }).save() 



const Student= mongoose.model("Student", studentSchema, "Students")

app.get("/g12",async(req,res)=>{
  const students= await Student.find({grade: 12})
  res.json(students)
})

// (OYO) create a route hanlder for /me that returns yourself without using your name in the query
//app.get("/friend", async(req,res)=>{
//  const students = await Student.find({grade: 12, name: Kristine})
  //res.json(students)
//})
// (OYO) create a route hanlder for /friend that returns someone at your table using their name in the query

// Write an async function called startServer



// inside make sure to connect to mongoose w/ your SRV string
// (make sure your call you name your database myClass!)
// Save a document to mongoDB about yourself 
// (OYO) save 2 more documents about students at your table
// make sure to start your server 
app.post("/students/save", async (req,res)=>{
  const student1= await new Student({
    name: req.body.name,
    grade:req.body.grade,
    favSub:req.body.favSub,
  }).save()
  res.json(student1)
})

// call startServer

// if you finished all the excersizes try these 
app.listen(3000,()=>{
console.log("server running")
})


}
startServer()
