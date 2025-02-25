var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Simple app for the Building Applications Lab!\n');
});

app.listen(process.env.PORT||3080, function () {
  console.log('Simple app for the Building Applications Lab!');
});

