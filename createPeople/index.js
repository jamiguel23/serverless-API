'use strict';
const dynamoose = require('dynamoose');
const uuid = require('uuid').v4
const peopleSchema = require('./peopleSchema')


exports.handler = async (event) => {
  // TODO implement

  let post;
  if (event.body) {
    post = JSON.parse(event.body)
    console.log(event.body)
  } else {
    return {
      statusCode: 500,
      body: "No Event Body Passed to Function",
    };
  }


  let People = dynamoose.model('people', peopleSchema);

  const newPeople = {
    id: uuid(),
    name: post.name ,
    phoneNum: post.phoneNum,
  }


  let response;

  try {

    const people = await People.create(newPeople);
    console.log(people);

    const response = {
      statusCode: 200,
      body: JSON.stringify(people),
    };
    
    
  } catch (e) {
    return {
      statusCode: 500,
      response: e.message,
    }
  }

  
  return response;
};
