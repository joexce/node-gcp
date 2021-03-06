const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send({ message: 'HELLO WORLD!', status: 200 });
});

app.listen(8080, () => {
    console.log('Hey joe! you run in port 8080');

    const welcomeword = `
    ██╗ ██████╗ ███████╗
    ██║██╔═══██╗██╔════╝
    ██║██║   ██║█████╗  
██  ██║██║   ██║██╔══╝  
╚█████╔╚██████╔╝███████╗
╚════╝  ╚═════╝ ╚══════╝`
    console.log('\x1b[32m', welcomeword);
});