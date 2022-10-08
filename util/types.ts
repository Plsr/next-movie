// TODO: Some types like URL could be typed more specific
export interface ItemInterface {
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  time: number
  title: string
  type: string
  url: string
  text: string
  dead?: boolean
  deleted?: boolean
}
