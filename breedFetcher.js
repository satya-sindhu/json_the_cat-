const fetchBreedDescription = function(breedName, callback) {
  const request = require("request");
  // Allow the user to specify the breed name using command-line arguments 
  // (eg)  node breedFetcher.js Chartreux on terminal
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    console.log(typeof body);
    
    if (error) {
      callback(error, undefined);
      return;
    }
    const data = JSON.parse(body);
    //console.log(data);          ===> gives the whole data of the URL
    
    // const description = data[0].description;     ====> DIFFERENT way to get the content of the description key
    // const {description} = data[0];             ====> DIFFERENT way to get the content of the description key

    //console.log(typeof data);
    if (data.length === 0) {
      callback("breed not found", undefined);
    } else {
          
      const description = data[0]['description'];
      callback(undefined, description);
    }
  });

};









module.exports = { fetchBreedDescription };