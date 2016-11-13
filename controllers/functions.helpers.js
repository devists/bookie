/**
 * Created by ansarimofid on 14/11/16.
 */

var reqSupport = require('../model/req_support_schema');

var fn={};

fn.getSupportCount = function (cb) {
  var suppData={};

  var agg = [
    {$group:{
      _id:'$book_id',
      count:{$sum:1}
    }}
  ];

  reqSupport.aggregate(agg, function (err, data) {
    if (err)
      console.log(err);
    else {
      console.log(data.length);
      for (var i=0; i<data.length;i++){
        /*var obj={};
        obj[data[i]._id[0]] = data[i].count;
        suppData.push(obj);*/
        suppData[data[i]._id[0]] = data[i].count;
      }
      cb(suppData);
    }
  });
};

fn.getSupportCountById = function (id, cb) {
  fn.getSupportCount(function (data) {
    cb(data[id]);
  })
};

module.exports = fn;