const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;
const {connect, Schema, Model} = require('mongoose');
const router = require('./routes/index');
const mongoURI = 'mongodb+srv://minhnvph46112:Anhminh04@cluster0.gljui.mongodb.net/'
connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
    .then(() => {
      console.log('Kết nối MongoDB thành công');
    })
    .catch((err) => {
      console.error('Kết nối MongoDB thất bại:', err);
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
module.exports = app;