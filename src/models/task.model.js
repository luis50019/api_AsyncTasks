import mongoose from "mongoose";

const taskSchema =new mongoose.Schema({
    nametask: {
        type: String,
        require: true,
        trim: true,
    },
    section:{
        type: String,
        require: true,
    },
    description:{
        type: String,
        require:true,
        trim:true
    },
    deadline:{
        type:String,
        require: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
},{
    timestamps:true
});

export default mongoose.model('Task',taskSchema);