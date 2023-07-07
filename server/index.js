const express = require('express');
const app = express();
const port = 5000;

app.use(express.json()); // for parsing application/json

app.post('/login', (req, res) => {
    // extract login details from request
    const { username, password } = req.body;

    // Check these details against your MongoDB user collection (not included in this basic example)

    // send response
    res.json({ message: "Login attempt received" });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
