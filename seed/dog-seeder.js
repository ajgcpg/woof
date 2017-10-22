var Dog = require('../models/dog');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/woof');

var dogs = [
    new Dog({
        imagePath: 'http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23244_what-is-the-appenzeller-sennenhunde-dog-300x189.jpg',
        name: 'Kidus',
        description: 'Fattest shit alive',
        age: 'fat',
        gender: 'fat'
    }),
    new Dog({
        imagePath: 'http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23244_what-is-the-appenzeller-sennenhunde-dog-300x189.jpg',
        name: 'Kidus',
        description: 'Fattest shit alive',
        age: 'fat',
        gender: 'fat'
    })
];

var done = 0;
for (var i = 0; i < dogs.length; i++) {
    dogs[i].save(function(err, result) {
        done++;
        if (done == dogs.length) {
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}