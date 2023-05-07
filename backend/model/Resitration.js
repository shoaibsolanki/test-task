const mongoose = require ('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    phoneNo:{
     type: Number,
     required:true,
     unique:true
    },
    email:{
        type: String,
        unique:true
    },
    age:{
        type: String,
        required: true
    },
    sex:{
        type: String,
        required: true
    },
    Govt_id:{
     type: String,
     default:null
    },
    Id_no:{
        type:String,
        default:null
    },
    Guardian:{
        type:String,
        default:null
    },
    EM_Contact:{
        type:Number,
        default:null
    },
    Address:{
        type: String,
        default:null
    },
    State:{
        type: String,
        default:null
    },
    city:{
    type:String,
    default:null
    },
    country:{
    type:String,
    default:null
    },
    pincode:{
        type: String,
        default:null
    },
    Occuption:{
        type: String,
        default:null
    },
    Relgion:{
        type: String,
        default:null
    },
    Marital_Status:{
        type: String,
        default:null
    },
    blood_group:{
        type: String,
        default:null
    },
    Nastionality:{
     type:String,
     default:null
    },
    date:{
        type: Date,
      default:Date.now 
    },
   
  });
const User = mongoose.model('user', UserSchema);
module.exports = User;
  