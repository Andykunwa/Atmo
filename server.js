const express = require("express"),
    app = express(),
    port = 8000,
    cors = require('cors'),
    server = app.listen(port, () => console.log("Listening on port 8000."));
const mongoose = require('mongoose');
const path = require('path');

app.use(cors());
app.use(express.static(__dirname + '/public/dist/public'));
app.get('/', (req, res) => Response.sendFile(path.join(__dirname)));
app.use(express.json());

require('./server/config/database');
require('./server/config/routes')(app);

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});