var express = require('express');
var bodyParser = require('body-parser');


var app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

app.listen(3000, function() {
  console.log('Server running');
});