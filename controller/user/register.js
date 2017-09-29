import userModel from './../../mongoose/user';
import md5 from 'md5';

const register = (req, res) => {
  const { uid, name, password } = req.body;
  const arr = [];

  if (!uid) {
    arr.push(缺少id);
  }
  if (!name) {
    arr.push(缺少昵称);
  }
  if (!password) {
    arr.push(缺少密码);
  }

  if (arr.length > 0) {
    res.send({
      code: 400,
      success: false,
      msgCode: arr.join(',')
    })
  }

  const time = new Date().getTime();
  const user = new userModel({
    uid: uid,
    name: name,
    password: md5(password),
    time: time,
  });
  user.save((err) => {
    if (err) {
      res.send({
        code: 500,
        success: false,
        msgCode: err
      })
      return;
    }
    res.send({
      code: 200,
      success: true,
    })
  });
}

export default register;