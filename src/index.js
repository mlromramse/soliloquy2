var Datastore = require('nedb');
var express = require('express');

var app = express();
var db = {};
db.ads = new Datastore({ filename: './data/ads.db', autoload: true });
db.users = new Datastore({ filename: './data/users.db', autoload: true });
db.rants = new Datastore({ filename: './data/rants.db', autoload: true });

require('./controllers/adsController.js')(app, db);
require('./controllers/analyticsController.js')(app, db);
require('./controllers/customersController.js')(app, db);
require('./controllers/rantsController.js')(app, db);
require('./controllers/usersController.js')(app, db);

app.use('/', express.static(__dirname + '/public/'));

app.listen(9000);
