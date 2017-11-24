const express = require('express');
const app = new express()

app.get('/',(req,res) => {
  res.send('test')
})

app.listen(3000);