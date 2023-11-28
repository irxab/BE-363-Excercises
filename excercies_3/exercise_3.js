const express = require('express');
const app = express();
const port = 3000;

const homeRouter = express.Router();
const aboutRouter = express.Router();
const contactRouter = express.Router();

homeRouter.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

aboutRouter.get('/', (req, res) => {
  res.send('About Us');
});

contactRouter.post('/', (req, res) => {
  res.send('Contact Form Submitted!');
});

app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
