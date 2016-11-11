/**
 * Created by ansarimofid on 10/11/16.
 */
var faker = require('faker');
var books = require('../model/booksden_book_schema');

module.exports = function (count) {
    var data = [];
    var lang = ['English', 'Hindi']
    for (var i=0;i<count;i++) {
        addBook({title:faker.lorem.words(), author:faker.name.findName(), desc:faker.lorem.paragraph(2), publisher:faker.name.lastName()+ ' Publisher', p_date:faker.date.past(), edition:faker.random.number({min:1,max:25}), isbn:faker.random.number({min:1111111111111,max:9999999999999}), language: faker.random.arrayElement(lang), pages:faker.random.number({min:50, max:2000})});
    }
};

function addBook(data,callback) {
    var newBook = books(data);
    newBook.save(function (err, table) {
        if (err)
            console.log(err);
        else
            console.log("Successfully Added");
    });
}