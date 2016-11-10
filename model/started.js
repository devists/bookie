var mongoose = require('mongoose');
var access_isbn = require('./access_isbn_schema');
mongoose.connect('mongodb://bookie:bookiedb1@ds149207.mlab.com:49207/bookie');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we are connected");

    var kittySchema = mongoose.Schema({
        name: {type : String, unique : true}
    });
    var Kitten = mongoose.model('Kitten', kittySchema);
    var silence = new Kitten([{name: 'Silence'}, {name: 'anil'}]);
    console.log(silence.name);

    silence.save(function(err, silence)
    {
        if (err) return console.error(err);
        console.log("hii, Your welcome");
    });
});

module.exports = db;
