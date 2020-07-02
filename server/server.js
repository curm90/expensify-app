const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');

app.use(express.static(publicPath));

app.listen(3000, () => console.log('server listening on port 3000'));
