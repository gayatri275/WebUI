//load  the express module
const express = require("express");
const body_parser =require("body-parser");
//get the app object from express()
const app=express();
const users = [{ userId: 1, name: "John", age: 23 },{ userId: 2, name: "Jill", age: 24 },{ userId: 3, name: "Jack", age: 21 }];

const logger=function(req,res,next){
    console.log("Logged URL "+req.body);
    next();
}
app.use(body_parser.json());
//add middleware
app.use(logger);
app.use(function(req,res,next){
    console.log("Next logger");
    next();

});


const port=3000;

app.get('/user',(req,res)=>{
    return res.status(200).json(users);
});


//web Api endpoint
//user/id return the json object in responce

app.get("/users/:id", (req, res) => {

    const user = users.find(u => u.userId === parseInt(req.params.id));
    
    if (!user) {
    
    return res.status(404).send("The user could not be found");
    
    }
    
    return res.status(200).json(user);
    
    });

    app.post('/users',(req,res)=>{

        const user = {
    
            userid:users.length+1,
    
            name:req.body.name,
    
            age:req.body.age
    
        };
    
        users.push(user);
    
        res.send(users);
    
    });
//assign port to the server
const port=3000;
app.listen(port,()=>{
    console.log('server start at port ${port}');
})