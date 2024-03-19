const express = require('express');
const path = require('path');
const currentIP = require('./getIp')

const app = express();
const port = 3000;

// route to access HTML page
app.get('/test', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  /* Call API here */   

  while(currentIP) {
      console.log('currentIP :>> ', currentIP);
      res.redirect('https://youtube.com')
      break
  }

});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});