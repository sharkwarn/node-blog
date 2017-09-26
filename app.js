import Express from 'express';
import cookieParser from'cookie-parser';
import bodyParser from 'body-parser';
import markdown from 'markdown';

import config from './config';
import db from './mongoose';
import router from './routes';

global.app = Express();
app.use(cookieParser());
//使用post提交方式
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//静态文件资源

app.use('/static', Express.static('public'));
app.use('/uploadfile', Express.static('uploadfile'));

//定义请求的公共设置。
app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", '3.2.1')
	if (req.method == 'OPTIONS') {
	  	res.send(200);
	} else {
	    next();
	}
});

router(app);

app.get('/yes',(req,res)=>{
  res.send({
    'login':'true'
  })
})

app.all('*',(req,res)=>{
  res.send(`404 页面没有找到！！！`)
})



app.listen(config.port,(err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log(`开启服务成功！！！`)
});
