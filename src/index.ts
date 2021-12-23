// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config()

// Realiza a importação do módulo express para importrução da API REST
import Express from "express"
import cors from "cors"

import Logger from "./modules/logger"

import APIRoutes from "./routes/APIRoutes"

// import Connector from "./services/eMAMConnector"

// import path from "path"

import fs from "fs"

const server = Express()

server.use(Express.json())
server.use(cors())

server.use("/", APIRoutes)

const config = JSON.parse(fs.readFileSync("config.json").toString())
const PORT = parseInt(config.api_port || "5000")

try {
  server.listen(PORT, () => {
    Logger.info(`Server started on port ${PORT}`)
  })
} catch (error) {
  Logger.error(`Server failed to start on port ${PORT} >> ${error}`)
}
