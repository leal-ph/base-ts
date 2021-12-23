import fs from "fs"

import { statusResponse } from "../types/index"

export async function moveFile(oldPath: string, newPath: string): Promise<statusResponse> {
  try {
    fs.rename(oldPath, newPath, function (err) {
      if (err) throw err
    })
  } catch (error: any) {
    return { code: 500, status: error.toString() }
  }
  return { code: 200, status: "success" }
}

export async function copyFile(originalPath: string, newPath: string): Promise<statusResponse> {
  try {
    fs.copyFile(originalPath, newPath, function (err) {
      if (err) throw err
    })
  } catch (error: any) {
    return { code: 500, status: error.toString() }
  }
  return { code: 200, status: "success" }
}
