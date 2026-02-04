//HTPP + port | listener to server (lensagement) | 

import http from 'http';


const server = http.createServer((req, res) => { //Create Server
    console.log(req.url, req.method); //Excute callback everytime we reach to the server (GET, POST, PUT)
});

const port = process.env.port ?? 3500;

server.listen(port, () => { //Open Port And Listen
    console.log(`Listenning From ${port}`);
});