const Contact = require("../models/Contact");




const UserMessage = async (req , res) => {

    const { Message , Name , Email } = req.body;
    try {
        const oldcontact = await Contact.find({Email:Email});
        let contact;
        if(oldcontact.length >0){
            console.log(oldcontact)

            const Messages = [...oldcontact[0].Message,Message] 

             contact = await Contact.findOneAndUpdate({Email:Email},{Message: Messages});


        }else{


             contact = await Contact.create({Name: Name , Email: Email, Message: [Message]});


        }
      res.json(contact);
    } catch (error) {
        console.log(error)
    //  req.status(500).json({error:"server error"});
    }


}
const getUserMessage = async (req , res) => {

    try {
        const contact = await Contact.find();
      res.json(contact);

    } catch (error) {
      req.status(500).json({error:"server error"});
    }


}


module.exports = {
    UserMessage,
    getUserMessage
}