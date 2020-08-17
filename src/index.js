const express = require ('express');

const server = express();

server.use(express.static("/home/dci/Desktop/Github/Glauber_Tutoring/FbW39_GroupD/public", {
"index": "html/index.html" }));

const port = 2023;
server.listen(port, function () {
    console.log(`Server is listening to port: ${port}`);
});