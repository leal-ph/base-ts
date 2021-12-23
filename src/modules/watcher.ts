import chokidar from "chokidar"
import fs from "fs"

const config = JSON.parse(fs.readFileSync("config.json").toString())

const WATCHFOLDER = config.watchfolder

export const watcher = chokidar.watch(WATCHFOLDER, {
  ignored: [/^\./, `${WATCHFOLDER}\\completeds`, `${WATCHFOLDER}\\error`],
  persistent: true,
  awaitWriteFinish: true,
  ignoreInitial: true,
  usePolling: true,
})
