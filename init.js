const mongoose = require("mongoose");
const chat = require("./models/chats.js");

main()
.then((res)=>{
    console.log("connection succesfull");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
    {
      from:"neha",
      to:"priya",
      msg : "hiiii",
      created_at:new Date(),
    },
    {
      from:"preeti",
      to:"neeraj",
      msg : "fairwell nhi hogaa",
      created_at:new Date(),
    },
    {
      from:"suju",
      to:"ayush",
      msg : "tu padhta nhi h",
      created_at:new Date(),
    },
    {
      from:"mumma",
      to:"monu",
      msg : "padhti nhi h",
      created_at:new Date(),
    },
    {
      from:"dhanu",
      to:"deanish",
      msg : "isko khilao bs",
      created_at:new Date(),
    },
    {
      from:"shreyashi",
      to:"bhagwan ji",
      msg : "kuch hoga b mera?",
      created_at:new Date(),
    },
    {
      from:"pari",
      to:"tejas",
      msg : "padh le na",
      created_at:new Date(),
    }
];
chat.insertMany(allchats);