const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

app.use(express.urlencoded({ extended: false }));

app.post("/email/send", (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "jedidiah.bradtke24@ethereal.email",
      pass: "jdBQ69k3vDqxNqYxgu",
    },
  });

  const mailOptions = {
    from: req.body.name,
    to: req.body.emailTo,
    subject: req.body.subject,
    text: req.body.text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      console.log("Email sended");
      res.status(200).jsonp(req.body);
    }
  });

  res.status(200).send("Email sended successfully");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
