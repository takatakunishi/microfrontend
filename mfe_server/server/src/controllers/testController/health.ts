import express from "express"
import type { Health } from "../../models/testModel"

export default async (req: express.Request, res: express.Response) => {
  console.log("test/health", {h:req.headers, c: req.headers.cookie})
  res.header("Access-Control-Allow-Origin", "http://localhost");
  // 許可したドメインでCookie関連の処理を許可するか設定
  // Access-Control-Allow-Originを*で全て許可していた場合tureにできない
  res.header("Access-Control-Allow-Credentials", "true");

  try {
    const response: Health = {message: "server is health", code: 200}
    res.cookie('cookie1', 'value1', {
      // ChromeだとsameSite: noneを指定したらsecureもtrueにする必要がある
      sameSite: 'strict',
      // secure: false, // https通信のみ送信される

      maxAge: 60000,
      httpOnly: true, // JavaScriptからアクセスできなくなる
      domain: "localhost"
    })
    res.json(response)
  } catch (err) {
    console.log(err)
    const response: Health = {message: "server is not health", code: 500}
    res.send(response)
  }
}