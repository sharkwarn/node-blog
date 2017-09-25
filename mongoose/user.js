import mongoose from 'mongoose';

import db from './index';

const userSchema = new mongoose.Schema({
  uid        :{type:Number},
  name      :{type:String,default:''},
  age       :{type:Number,default:''},
  sex       :{type:String,default:''},
  password  :{type:String,default:''},
  phone     :{type:String,default:''},
  logo      :{type:String,default:'http://image48.360doc.com/DownloadImg/2011/12/2210/20211680_1.jpg'},
  sign      :{type:String,default:''},
  birthday  :{type:Number,default:''}
})

userSchema.methods.find = (callback)=>{
  this.model('user').find({name:'朱良灿'},callback)
}
const userModel = db.model("user",userSchema);


export default userModel;
