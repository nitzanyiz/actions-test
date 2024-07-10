const fs = require('fs');



// create a file called text.txt and write some funny story in it
fs.writeFile('text.txt', `Once upon a time, there was a
beautiful princess who lived in a castle. She was very
kind and loved by everyone in the kingdom.`, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('File created successfully');
});
