import express, { Application } from 'express'
import cors from 'cors'
const app: Application = express()
import gblobalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'

app.use(cors())

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application Router
app.use('/api/v1/users', UserRoutes)

//Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   console.log(x)
// })
// global error 🖕
app.use(gblobalErrorHandler)

export default app
