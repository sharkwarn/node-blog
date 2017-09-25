import mongoose from 'mongoose';
import config from './../config';

const db = mongoose.createConnection(config.mongodbUrl);

db.once('open',() => {
  console.log('连接数据库成功！');
})

db.once('err', () => {
  console.log('连接数据库失败！');
})

export default db;