var User = require('../models/user');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/woof', { useMongoClient: true });
mongoose.Promise = global.Promise;

var users = [
    new User({
        name: 'Aidan',
        email: 'test@test.org',
        password: 'test'
    })
];

function seed(user) {
    var done = 0;
    for (var i = 0, n = users.length; i < n; i++)
    {
        users[i].save(function (err) {
          if (err) {
            console.log(err);
          } else {
            done++;
            console.log('created user');
          }
          if (done == n){
            exit();
          }
        });
    }

    function exit(){
        mongoose.disconnect();
    }
}

seed(users);
