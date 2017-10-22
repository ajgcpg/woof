var Dog = require('../models/dog');

var dogs = new Dog({
    imagePath: 'http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23244_what-is-the-appenzeller-sennenhunde-dog-300x189.jpg',
    name: 'Kidus',
    description: 'Fattest shit alive',
    age: 'fat',
    gender: 'fat'
});

for (var i = 0; i < dogs.length; i++) {
    products[i].save();
}