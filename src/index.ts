import express, { Application } from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

const app: Application = express()
const port = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

app.get('/', (req, res) => {
    res.send('Hello World')
  })

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)})