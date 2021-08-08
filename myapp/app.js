const express = require('express'); 
const app = express(); 
const port = 3000; 
app.get('/', (req, res) => { 
  res.send('Bienvenidos a nuestra plataforma virtual que contiene recursos educativos para la zonas rurales'); 
}) 

app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`); 
}) 
process.env.RUNKIT_ENDPOINT_URL;