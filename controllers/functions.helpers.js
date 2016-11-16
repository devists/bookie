/**
 * Created by ansarimofid on 14/11/16.
 */

var reqSupport = require('../model/req_support_schema');
var favSupport = require('../model/fav_books_schema');

var fn = {};

fn.getSupportCount = function (cb) {
  var suppData = {};

  var agg = [
    {
      $group: {
        _id: '$book_id',
        count: {$sum: 1}
      }
    }
  ];

  reqSupport.aggregate(agg, function (err, data) {
    if (err)
      console.log(err);
    else {
      console.log(data.length);
      for (var i = 0; i < data.length; i++) {
        /*var obj={};
         obj[data[i]._id[0]] = data[i].count;
         suppData.push(obj);*/
        suppData[data[i]._id[0]] = data[i].count;
      }
      cb(suppData);
    }
  });
};

fn.getFavCount = function (cb) {
  var favData = {};

  var agg = [
    {
      $group: {
        _id: '$book_id',
        count: {$sum: 1}
      }
    }
  ];

  favSupport.aggregate(agg, function (err, data) {
    if (err)
      console.log(err);
    else {
      console.log(data.length);
      for (var i = 0; i < data.length; i++) {
        /*var obj={};
         obj[data[i]._id[0]] = data[i].count;
         suppData.push(obj);*/
        favData[data[i]._id[0]] = data[i].count;
      }
      cb(favData);
    }
  });
};

fn.getSupportCountById = function (id, cb) {
  fn.getSupportCount(function (data) {
    cb(data[id]);
  })
};

fn.getFavByUser = function (uid, cb) {
  favSupport.find({
    stud_id: uid
  })
    .populate("book_id")
    .exec(function (err, datas) {
      if (err)
        cb(err);
      else {
        var favs = {};
        datas.map(function (data) {
          if (typeof data['book_id'][0] !== 'undefined') {
            favs[data['book_id'][0]['_id']] = {'data':data['book_id'][0]};
          }
        });
        cb(err, favs);
      }
    })

};

module.exports = fn;