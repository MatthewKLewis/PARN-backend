//Imports
const express = require("express")
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

//Routes
const todoRoutes = require('./routes/todos')

//Configuring...
const port = process.env.PORT || 4000
const app = express();
app.use(cors())
app.use(bodyParser.json())

//Route Registration
app.use('/todos', todoRoutes)

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
  res.send('Invalid Endpoint')
})

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});