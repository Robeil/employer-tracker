// creating the server here
const express = require('express');
const fs = require('fs');



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.static("public"));

app.get('/api/characters/:character', function (req, res) {
    let chosen = req.params.character;
  
    console.log(chosen);
  
    for (let i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
  
    return res.json(false);
  });



app.listen(PORT, () => {
    console.log(`App listening at http://localhosts/${PORT}`);
  });
  
