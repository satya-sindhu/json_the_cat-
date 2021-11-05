const request = require('request');


const handleResponse = (error, response, body) => {
  
  if (error) {
    console.log(error);
  } else {
    //console.log(typeof body);
  //console.log(response);
    const data = JSON.parse(body);
    if (data.length > 0) {
      console.log(data[0].description);
      console.log(typeof data);
    } else {
      console.log('Breed Not FOUND!');
    }
  }
  
};