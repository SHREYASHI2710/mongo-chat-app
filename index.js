const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const chat = require("./models/chats.js");
const methodoverride = require("method-override")

main()
.then((res)=>{
    console.log("connection succesfull");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.use(express.urlencoded ({extended : true}));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(methodoverride("_method"));

//index route
app.get("/chats",async(req , res)=>{
    let chats = await chat.find();
    //console.log(chats);
    res.render("index.ejs" ,{chats});
});

//new route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

//create route
app.post("/chats",async(req,res)=>{
    let {from , to , msg} = req.body;
    let newchat = new chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    newchat.save().then((res)=>{
        console.log("good");
    }).catch((err)=>{
        console.log(err);
    })
    res.redirect("/chats");
});

//edit route
app.get("/chats/:id/edit" , async (req , res)=>{
    let {id} = req.params;
    let foundchat = await chat.findById(id);
    res.render("edit.ejs",{chat:foundchat});
});

//update route
app.put("/chats/:id" , async (req,res)=>{
    let {id} = req.params;
    let {msg :newmsg} = req.body;
    console.log(newmsg);
    let updatechat =await chat.findByIdAndUpdate(id,{msg:newmsg},{runValidators:true , new : true});
    console.log(updatechat);
    res.redirect("/chats");
});

//delete/destroy route
app.delete("/chats/:id" ,async (req ,res)=>{
    let {id} = req.params;
    let delchat = await chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

app.get("/" , (req , res)=>{
    res.send("working root");
});

app.listen(8080,()=>{
    console.log("server is listening");
});