const User = require("../models/User");
const bcrypt = require("bcrypt");
const SECRETKEY = process.env.SECRETKEY;
const jwt = require("jsonwebtoken");



const getUserData = async (req,res) => {
const userData = await User.findOne({_id:req.user.id})
res.json(userData)
}



const AllAdmins = async (req,res) => {
    try {
        const AllAdmins = await User.find({Role:"Admin"})
        console.log(AllAdmins)
        res.json(AllAdmins)
    } catch (error) {
        console.error(error.message);

    }
}
const AllAirLines = async (req,res) => {
    try {
        const AllAdmins = await User.find({Role:"Airline"})
        console.log(AllAdmins)
        res.json(AllAdmins)
    } catch (error) {
        console.error(error.message);

    }
}
const AddAirline = async (req , res) => {
 const {Email , Password,role } = req.body;
try {
    const checkUser =await User.find({Email : Email})

    if (checkUser.length != 0) {
       res.status(500).json({error: "User already exists"})
    } else {
       const hashPassword = await bcrypt.hash(Password, 5);
       const newUser = new User({Email: Email, Password: hashPassword , Role :role})
       const addedUser = await newUser.save();
     
       res.json({NewAirline : addedUser})
    }

} catch (error) {
    console.error(error.message);
}


}
const LogIn = async (req , res) => {
 const {Email , Password } = req.body;
try {
    const checkUser = await User.find({Email : Email})
  console.log(Email,checkUser)
    if (checkUser.length != 0) {
        const validpassword = await bcrypt.compare(Password, checkUser[0].Password);
        if (!validpassword) {
            return res.json({ error: "incorrect password" });
          }
          if (validpassword) {

            const token = jwt.sign(
                {id:checkUser[0]._id,Email:Email,Role:"Airline"},SECRETKEY,{expiresIn:"24h"}
               )
               console.log(token)
               res.json({user:checkUser ,token:token})
          }      
          

    } else {

        res.status(404).send({ error:"email not found" });
        
    }

} catch (error) {
    console.error(error.message);
}


}



module.exports = {
    AddAirline,
    LogIn,
    AllAdmins,
    AllAirLines,
    getUserData,
}