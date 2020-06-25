const express = require('express')
// allows us to interpret json being sent over in the body. 
const bodyParser = require('body-parser')
// const { request } = require('express')

// must invoke express function to make the magic happen
const app = express()

app.use(bodyParser.json())

// takes in a string with the path
// second argument to this is a function
app.get('/', (request, response) => {
  response.json({ message: 'Hello world!' })
})

app.post('/', (request, response) => {
  response.json({ message: request.body })
})



// app.post('/users') THESE ARE THE EQUIVALENTS TO HOW YOU DO ROUTES IN RAILS 

app.listen(4000)