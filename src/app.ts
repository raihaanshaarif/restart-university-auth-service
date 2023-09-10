import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
import usersRouter from './app/modules/users/users.route'

app.use(cors())

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application Router
app.use('/api/v1/users', usersRouter)

//Testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully!')
})

export default app
