const express = require('express');
const GreetingService = require('./greeting-service')

const app = express()

const PORT = process.env.PORT || 3000

app.use('/greeting', (req, res) => {
    const greating = new GreetingService(req.query.name)
    
    res.send(greating.getGreeting()).status(200)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})