// requere the sendGrid packete
// load the env consts
require('dotenv').config();

const sendGridMail = require("@sendgrid/mail");
// extract the api 

sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);



const sendContact = (email, name) =>  {
    sendGridMail.send({
        to: email,
        from: "picome28@gmail.com",
        subject: "Your opinion means the world to us",
        text: `Dear ${name}, Your opinion is very important for us. You’re helping us to create a better product`
    })
   

}

const sendContactToMe = (email, name, lastname, message) =>  {
    sendGridMail.send({
        to: "picome28@gmail.com",
        from: "picome28@gmail.com",
        subject: "Hey PicoMe",
        text: `Someone name ${name} ${lastname}, Send you the follow message ${message}, do you want to reply? ${email}`
    })
   

}




module.exports = {
    sendContact, 
    sendContactToMe
}



