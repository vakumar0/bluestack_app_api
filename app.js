const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const app = express();
const port = 8000;
const path = require('path');

//import routes
var apiRoutes = require('./api/routes/servicesRoutes');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//use routes
app.use('/', apiRoutes);

app.get("/*", function (req, res) {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});