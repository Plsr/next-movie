import { formatDistance, fromUnixTime } from 'date-fns'

export const createdAgo = (unixTime: number): string => {
  const ago = formatDistance(fromUnixTime(unixTime), new Date())
  return `${ago} ago`
}
