const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  //console.log("aaa");
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

console.log("zzz");