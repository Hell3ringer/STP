const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routeURL = require('./Routes/route')
const cors = require('cors');
const professionals = require('./Routes/professionals');
const PORT=process.env.PORT || 4000;
let corsOptions = {
  origin: 'http://localhost:4000/' 
};


app.disable("x-powered-by");
//config
dotenv.config()

mongoose.connect(process.env.ACCESS_NIKHIL, () => console.log('database connected') )

app.use(express.json())
app.use(cors());
app.use('/professionals',professionals)
app.use('/app',routeURL)
// Serve static assets under production
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  })
}
app.listen(PORT,console.log(`Server open at  ${PORT}`));