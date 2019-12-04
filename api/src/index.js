const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

const PORT = process.env.PORT || 8080;
const HOST = 'localhost';
const app = express();

app.use(bodyParser.json());
app.use(cors({origin: '*'}));

app.get('/api', (req, res) => {
  let data = { message: "Hello World, you're ready to start your project! :)"};
  res.send(JSON.stringify(data));
});

app.listen(PORT);

console.log(`Running on http://${HOST}:${PORT}`);
