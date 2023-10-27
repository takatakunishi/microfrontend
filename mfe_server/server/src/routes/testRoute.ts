import express from 'express'
import testController from '../controllers/testController'

const router = express.Router()

router.route("/test/health").get(testController.health)

router.route("/user/postTest")
    .post(testController.postTest)

export default router