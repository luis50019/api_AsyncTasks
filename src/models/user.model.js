//this define a schema of user using mongoose
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

},{
    timestamps:true
});

export default mongoose.model('User', userSchema);