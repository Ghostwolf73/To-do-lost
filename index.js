const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var tasks = ["Buy food", "Cook food", "Eat"];
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');  

app.get('/', function(req, res){
    var today = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    var day = today.toLocaleDateString('en-US', options);
    
    res.render("list", {
        kindOfDay: day,
        newItems: tasks
    });
});

app.post('/', function(req, res){
    var task = req.body.nlist;

    tasks.push(task);

    res.redirect("/");
})

app.listen(3000, function(){
    console.log("Your server has started on port 3000");
});



