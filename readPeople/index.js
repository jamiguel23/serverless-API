const dynamoose = require('dynamoose');

const peopleSchema = require('./peopleSchema')

exports.handler = async (event) => {
    
    console.log(event.pathParameters);
    console.log(event.queryStringParameters);


    // let peopleSchema = new dynamoose.Schema({
    //     id: String,
    //     name: String,
    //     phoneNum: String,
    // })

    try{

      let People = dynamoose.model('people', peopleSchema);

      // id query
      // await People.query('id').eq(id).exec()
  
      let peopleRecord = await People.scan().exec();
  
  
      // TODO implement
      const response = {
          statusCode: 200,
          body: JSON.stringify(peopleRecord),
      };
      return response;


    }catch(e){

      console.log(e);
    }
};
