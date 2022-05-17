const mongoose = require('mongoose')

const ChatroomSchema = new mongoose.Schema({
    members:{
        type:Array
    }
},
{timestamps:true}
);

module.exports = mongoose.model("Chatroom",ChatroomSchema)