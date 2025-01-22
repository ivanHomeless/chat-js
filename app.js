const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000
const API_PREFIX = '/api/v1'


app.use(express.static(path.join(__dirname, 'dist')))

app.get(`${API_PREFIX}/text`, (req, res) => {
    res.status(200).send('Hello, World!\n');
  });
  
app.put(`${API_PREFIX}/json`, (req, res) => {    
    res.status(201).json({"data": {"items": [1, 2, 3]}})
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});