// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { encryptString } = require('./encryptionModule.js'); // Import your encryption logic

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/encrypt', (req, res) => {
  const { data } = req.body;
  const encrypted = encryptString(data); // Your encryption function
  res.json({ encrypted });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
