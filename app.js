const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.get('/info', (requ, res) => {
  axios
    .get('http://www.metrovias.com.ar/Subterraneos/Estado?site=Metrovias')
    .then(res => res.data)
    .then(subtes => {
      res.send(subtes);
    });
});

app.listen(7051);
