import express from 'express'

const app = express()

app.get('/', (request: any, response: any) => {
  return response.json({ message: 'teste Hello World!' })
})

app.listen(3333)
