import userModel from './../../mongoose/user';
import md5 from 'md5';

const login = (req, res) => {

  const {uid, password} = req.body;

  const arr = [];

  if (!uid) {
    arr.push('请填写帐号信息');
  }
  if (!password) {
    arr.push('请填写密码');
  }

  userModel.login(uid, function(err, data){
    if (err) {
      console.log(err);
      res.send({
        code: 500,
        success: false,
        msgCode: '帐号或密码不正确'
      });
      return;
    }
    console.log(data);
    if (md5(password) == data.password) {
      res.cookie('login', 1, { expires: new Date(Date.now() + 10000 * 60 * 60 * 24) });
      res.send({
        code: 200,
        success: true
      });
      return;
    } else {
      res.send({
        code: 200,
        success: false,
        msgCode: '帐号或密码不正确'
      });
    }
  })
}

export default login;