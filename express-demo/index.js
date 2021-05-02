const Joi=require('joi')
const express=require('express')
const app=express()

app.use(express.json())

const courses=[
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'},
    {id:4, name:'course4'}
]

app.get("/",(req,res)=>{
    res.send("Hello express here")
})

app.get('/api/courses/:id',(req,res)=>{
let course=courses.find(c=> c.id==parseInt(req.params.id))

if(!course)
    res.status("404").send('The course with given id not found');
    res.send(course)

})

app.get('/api/courses/:id',(req,res)=>{
    res.send(req.query)
    })

app.get("/api/courses",(req,res)=>{
    res.send(courses)
})
    

app.post('/api/courses',(req,res)=>{
if(!req.body.name || req.body.name<3){
    res.status(400).send("Error name is smaller than 3")
    return
}
const course={
        id:courses.length +1,
        name:req.body.name
} 

 courses.push(course);
 res.send(course);
})



app.put('/api/courses/:id',(req,res)=>{
    let course=courses.find(c=> c.id==parseInt(req.params.id))

    if(!course)
      return  res.status("404").send('The course with given id not found');

    course.name=req.body.name;
    //return
if(req.body.name.length<3) {
    res.send("Smaller")
    return
}

    res.send(course);

})



function validateCouse(course){
    const schema={
        name:Joi.string().min(3).required()
    }
    return Joi.validate(req.course,schema);
    
}

//Delete

app.delete("/api/courses/:id",(req,res)=>{

    const course=courses.find(c=>c.id==parseInt(req.params.id));
    if(!course)
       return  res.status(400).send("Not found !")
        
    
    const index=courses.indexOf(course);
    courses.splice(index,1);
    res.send(course)

}
)

const port=process.env.PORT || 3000;
app.listen(port,()=>{
console.log(`Running at  ${port}`)
})