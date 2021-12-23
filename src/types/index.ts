/* eslint-disable camelcase */
export interface Marker {
  markerName: string
  setInTime: string
  duration: string
  description: string
}

export interface eMAMToken {
  access_token: string
  token_type: string
  expires_in: number
}

export interface eMAMResponse {
  id: number
  markerName: string
  setInTime: string
  duration: string
  description: string
}

export interface statusResponse {
  code: number
  status: string
  message?: string
}

export interface eMAMAsset {
  title: string
  fileName: string
  description: string
  author: string
  assetType: string
  storageId: number
  originalVirtualPath: string
  originalFilePath: string
  isLive: boolean
  streamingVirtualPath: string
  streamingFilePath: string
  duration: string
  size: number
  frameRate: number
  timeOffset: string
  thumbnailURL: string
}
