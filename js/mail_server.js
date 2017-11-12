var nodemailer = require('nodemailer');

function validateForm() {
    var name = document.getElementById("name-submit");
    var email = document.getElementById("email-submit");
    var info = document.getElementById("info-submit");
    console.log(name, email, info);

}

let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'rodg6714@eduhsd.k12.ca.us',
        //Do not push to github until password is scrubbed.
        pass: '1173'
    },
    tls: {
        rejectUnauthorized: false
    }
});



let helperOptions = {
    from: '<' + email + '>',
    to: 'rodg6714@eduhsd.k12.ca.us',
    subject: name + ' User Submission',
    text: info
};

    transporter.sendMail(helperOptions, (error, info) => {
    if (error) {
        return console.log(error);
    } else {
        console.log("The message was sent.");
        console.log(info);
    }
        
});