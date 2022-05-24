const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    email:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true
    },
    city:{
        type:String,
        required:true
    },
    postalcode:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('user',UserSchema)