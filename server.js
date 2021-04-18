// OUR "BBDD" 
var images = [
    { title: 'Perro_gordo', url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.W4A7fToVwIlIaJMcD7_inAHaFj%26pid%3DApi&f=1", date: "17/01/18"}
];

// load the things we need
var express = require('express');
var app = express();


// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
// parse url-encoded params
app.use(express.urlencoded({extended: false}))

// show img page 
app.get('/', function(req, res) {

    var tagline = "These are the images you uploaded";

    res.render('pages/index', {
        images: images,
        tagline: tagline
    });
});


// add img page
app.get('/add-img', function(req, res) {
    res.render('pages/add-img');
});

app.post('/add-mascot', function(req, res) {

    const title = req.body.title;
    const url = req.body.url;
    const date = req.body.date;

    const validOutput = querySelector('#validation')

    if ( title.length > 0){
        if ( title.match('^.*$') ) {
            validOutput.innerText = 'Title is valid'
        } else{
            validOutput.innerText = 'Title is invalid'
        }
    }

//    images.push({
//        title: title,
//        url: url,
//        date: date
//    });

   res.render('/')
});


app.listen(8080);
console.log('8080 is the magic port');
