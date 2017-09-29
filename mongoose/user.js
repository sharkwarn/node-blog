import mongoose from 'mongoose';

import db from './index';

const userSchema = new mongoose.Schema({
  uid        :{type:String},
  name      :{type:String,default:''},
  password  :{type:String,default:''},
  time      :{type:Number}
});

userSchema.statics.login = function(uid,callback){
  return this.findOne({uid: uid}, callback)
}
const userModel = db.model("user",userSchema);


export default userModel;
