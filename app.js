var express = require('express');
 logger = require('morgan'),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');
    var app = express();
    app.set('view engine','ejs');
    app.use(logger('dev'))
 
  app.use(express.static(__dirname + '/views'));
  app.use(express.static('public'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
    
    var port = 3000;

    app.get('/', function (req, res) {
   res.render('index');
    });

 

    app.post('/send/email', function (req, res) {
    
     let mailsend = nodeMailer.createTransport({
         host: 'smtp.gmail.com',
       port: 465,
       auth: {
       user: 'harishav96@gmail.com',
         pass: 'Harish@123'

    }
    
    })
  

    let htmlTemplate = `<b>Email: ${req.body.email}</b> <br/> <b>FirstName: ${req.body.firstname}</b><br><b> Message : ${req.body.message} </b>`;

   let mailInfo = {
     from:req.body.email,
       to: 'harishav96@gmail.com', 
         subject: 'Test Mail',
         html: htmlTemplate
         
    };
     mailsend.sendMail(mailInfo, (error) => {
     if (error) {
         return console.log('Unable To Send Message');
      }
         console.log('Message Sent Successfully');
          res.render(index)
     });

     res.render('index') ;
      });
          app.listen(port, function(){
            console.log('Server is running at port: ',port);
       });