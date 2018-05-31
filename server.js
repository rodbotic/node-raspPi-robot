const express = require('express')

const app = express()

app.get('/',(req,res) => {
  res.send('Test World');
})

app.listen(3000);

