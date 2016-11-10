/**
 * Created by vermanil on 10/11/16.
 */
var mongoose = require('mongoose');
var category_details_schema = mongoose.Schema({
    category_id : Number,
    category_name : String
});

var category_details = mongoose.model('category_details', category_details_schema);

var category_details1 = new category_details({

});

category_details1.save(function(err, category_details){
    if (err) return console.error(err);
    console.log('category_details table created');

});

module.exports = category_details;