const mongoose = new require("mongoose");

const post_scheme = mongoose.Schema({
    name:{
        type:String,
        required:"Name is required"
    },
    email:{
        type:String,
        required:"Email is required",
        unique: true
    },
    phone:{
        type:Number,
        required:"Phone is required"
    },
    password:{
        type:String,
        required:"Password is required"
    }

    
},


{
    timestamps: true
}
)



module.exports = mongoose.model("Post",post_scheme)