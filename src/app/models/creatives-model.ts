export interface CreativeModel {
  _id?: string
  name: string
  animation: string
  height: number
  horizontalPos: number
  imageSize: number
  verticalPos: number
  width: number
  imageSrc: string
  __v?: string
  userId: string
  campaignId: string
  placementId: string
}

export interface Animation {
  name: string
  _id: string
}
