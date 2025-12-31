// const mongoose =require('mongoose');

// //mongoose.connect('mongodb://127.0.0.1:27017/test');

// main()
// .then((res)=>{
//     console.log("connection succesfull");
// })
// .catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');
// }

// const userSchema = new mongoose.Schema({
//     name: String,
//     email:String,
//     age:Number,
// });
// const User = mongoose.model("user",userSchema);
// const user1= new User({
//     name:"shreyashi" ,
//     email:"singhshreyashi2701@gmail.com",
//     age:20,
// });
// user1.save();

// const user2= new User({
//     name:"pookie" ,
//     email:"pookiecutie@gmail.com",
//     age:2,
// });
// user2.save().then((res)=>{
//     console.log("ho gya");
// })
// .catch((err)=>{
//     console.log("lalalala");
// });