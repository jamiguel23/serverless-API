'use strict';

const dynamoose = require('dynamoose');

let peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  phoneNum: String,
})

module.exports = peopleSchema;
