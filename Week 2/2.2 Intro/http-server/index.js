const express = require('express')
const app = express()
const port = 3000


//fs.readfile("path", "UTF-8", ())
app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})