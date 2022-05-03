const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var tasks = [];
let workTasks = [];
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');  

app.get('/', function(req, res){
    var today = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };

    var day = today.toLocaleDateString('en-US', options);
    
    res.render("list", {
        listTitle: day,
        newItems: tasks
    });
});

app.post('/', function(req, res){

    let task = req.body.nlist;

    if(req.body.list === "Work"){
       workTasks.push(task); 
       res.redirect("/work");
    }else {
        tasks.push(task);

        res.redirect("/");
    }
        
});

app.get('/work', function(req, res){
    res.render("list", {
        listTitle: "Work List",
        newItems: workTasks
    });
});


app.listen(3000, function(){
    console.log("Your server has started on port 3000");
});



