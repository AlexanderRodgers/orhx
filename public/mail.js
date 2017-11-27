const env = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express();

//Static folder
app.use('/public', express.static(path.join(__dirname)));
app.use('/html', express.static(__dirname + '/html'));

console.log(path.join(__dirname + '/html'));

// view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded( {extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('contact');
});

app.post('/send', (req, res) => {
    console.log(req.body);
    
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    
    let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: process.env.user,
        //Do not push to github until password is scrubbed.
        pass: process.env.pass
    },
    tls: {
        rejectUnauthorized: false
    }
});

Handlebars.registerHelper('xable', function() {
    
    text = "this.parentElement.style.display='none'";
    console.log(text);
    
    return new Handlebars.SafeString(text);
});

let helperOptions = {
    from: '<' + email + '>',
    to: 'rodg6714@eduhsd.k12.ca.us',
    subject: name + ' User Submission',
    text: message
};

    transporter.sendMail(helperOptions, (error, info) => {
    if (error) {
        return console.log(error);
    } else {
        console.log("The message was sent.");
        console.log(info);
    }
        
        
    res.render('emailFinish', {msg: 'email has been sent'});
});
    
})

app.listen(3000, () => console.log('Server started...'));