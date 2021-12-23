import Express from "express"
import Logger from "../modules/logger"

// const config = JSON.parse(fs.readFileSync("config.json").toString())

class APIController {
  async testeReturn(req: Express.Request, res: Express.Response) {
    Logger.info("Successfully received test request")
    res.status(200).send({ status: "successTest" })
  }
}

export default new APIController()
