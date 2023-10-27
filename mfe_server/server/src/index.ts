import express from 'express'
import cors from 'cors'
import router from './routes'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()

const app: express.Express = express()
const port = process.env.PORT || 9000
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})