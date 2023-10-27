import express from "express"
import testRoutes from './testRoute'

const router = express.Router()

router.use('/', testRoutes)

export default router