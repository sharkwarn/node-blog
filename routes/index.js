import user from './user';
import upload from './upload';
import article from './article';
import banner from './banner';
export default app => {
  
  app.use('/user', user);

  app.use('/upload', upload);

  app.use('/article', article);

  app.use('/banner', banner);

  app.use('/register', (req, res) => {
    res.send('hehehe');
  })
}