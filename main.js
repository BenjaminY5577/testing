const express = require("express");
const user = require("./user");
const account = require("./account");

server = express();
server.use(express.json());

server.use(user.router);
server.use(account.router);

server.listen(3000);
