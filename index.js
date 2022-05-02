const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', function(req, res){
    var today = new Date();

    if(today.getDay() === 6 || today.getDate() === 0){
        res.send("Weekend");
    }else {
        res.send('no weekend');
    }
});

app.listen(3000, function(){
    console.log("Your server has started on port 3000");
});
