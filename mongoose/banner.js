import mongoose from 'mongoose';

import db from './index';

const bannerSchema = new mongoose.Schema({
  ids        :{type: Array}
});

const bannerModel = db.model("banner",bannerSchema);


export default bannerModel;
