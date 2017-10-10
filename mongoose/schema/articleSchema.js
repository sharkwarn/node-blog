import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
  name: String,
  titleImg: String,
  time: Number,
  creator: String,
  editor: String,
  editTime: Number,
  content: String
})

ArticleSchema.statics.findByName = function(id,cb){
  return this.findOne({'_id': id}, cb);
}

export default ArticleSchema;