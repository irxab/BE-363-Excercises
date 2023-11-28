const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  res.send(`Form submitted! \nName: ${name} \nEmail: ${email} \nMessage: ${message}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
