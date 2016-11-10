/**
 * Created by vermanil on 10/11/16.
 */
var mongoose = require('mongoose');

var req_support_schema = mongoose.Schema ({
    req_id : Number,
    stud_id : Number,
    comment : String
});
