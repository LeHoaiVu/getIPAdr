const express = require('express');
const path = require('path');
const ipAddr = require('./getIp.js')

const app = express();
const port = 3000;
app.use(express.static('public'));


// route to access HTML page
app.get('/*', async(req, res) => {    
    const ipAddress = req.socket.remoteAddress;
    // const ipAddresses = req.header('x-forwarded-for');
    if(ipAddr) {
      await console.log('ipAddr :>> ', ipAddr);
    }
    /* Call API here */   
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

