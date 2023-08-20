const User = require("../models/User");
const bcrypt = require("bcrypt");
const SECRETKEY = process.env.SECRETKEY;
const jwt = require("jsonwebtoken");


const AddAirline = async (req , res) => {
 const {Email , Password } = req.body;
try {
    const checkUser = User.find({Email : Email})
 
    if (checkUser.length > 0) {
       res.status(500).json({error: "User already exists"})
    } else {
       const hashPassword = await bcrypt.hash(Password, 5);
       const newUser = new User({Email: Email, Password: hashPassword , Role : "Airline"})
       const addedUser = await newUser.save();
       console.log(addedUser._id)
       const token = jwt.sign(
        {id:addedUser._id,Email:Email,Role:"Airline"},SECRETKEY,{expiresIn:"24h"}
       )
       res.json({NewAirline : addedUser,token:token})
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
    if (checkUser.length > 0) {
    //    res.status(500).json({error: "User already exists"})
    console.log(Email , Password)


    } else {

        res.status(500).json({error: "User not found"})
        //    console.log(addedUser._id)
        //    const token = jwt.sign(
        //     {id:addedUser._id,Email:Email,Role:"Airline"},SECRETKEY,{expiresIn:"24h"}
        //    )
        //    res.json({NewAirline : addedUser,token:token})
    }

} catch (error) {
    console.error(error);
}


}



module.exports = {
    AddAirline,
    LogIn

}