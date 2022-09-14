import express from 'express'

const app = express()

app.get('/', (request, response) => {
    return response.send('Acessou ads');
})

app.listen(3333)