var Dog = require('../models/dog');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/woof', { useMongoClient: true });
mongoose.Promise = global.Promise;

var dogs = [
    new Dog({
        imagePath: 'http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23244_what-is-the-appenzeller-sennenhunde-dog-300x189.jpg',
        name: 'Kidus',
        description: 'Test1',
        age: '5',
        sex: 'm',

    }),
    new Dog({
        imagePath: 'http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23244_what-is-the-appenzeller-sennenhunde-dog-300x189.jpg',
        name: 'Kidus2',
        description: 'Test2',
        age: '6',
        sex: 'f'
    })
];

function seed(dog) {
    var done = 0;
    for (var i = 0, n = dogs.length; i < n; i++)
    {
        dogs[i].save(function (err) {
          if (err) {
            console.log(err);
          } else {
            done++;
            console.log('meow');
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

seed(dogs);
