import express from "express"
import type { Health, PostTestParam } from "../../models/testModel"

export default async (req: express.Request, res: express.Response) => {
  console.log("test/health")
  const postParam = req.body as PostTestParam
  try {
    if (!postParam) {
      const response: Health = {message: "server is health", code: 200, data: "no data is catched in server!"}
      res.json(response)
    } else {
      const response: Health = {message: "server is health", code: 200, data:postParam}
      res.cookie('name1', 'value1', {
        maxAge: 60000,
        httpOnly: false
      })
      res.json(response)
    }
  } catch (err) {
    console.log(err)
    const response: Health = {message: "server is not health", code: 500}
    res.send(response)
  }
}