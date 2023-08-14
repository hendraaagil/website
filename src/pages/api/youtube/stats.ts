// @ts-nocheck
import type { NextApiHandler } from 'next'
import { google } from 'googleapis'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
    })

    const youtube = google.youtube({
      auth,
      version: 'v3',
    })

    const channelIds = ['UCy44Cn1aBo3LYrZsh2gKGIA', 'UC-8I6YXDaagpTHTWM5GYl8Q']
    const channels = await youtube.channels.list({
      id: channelIds,
      part: 'statistics',
    })

    const statistics = { subscriberCount: 0, videoCount: 0, viewCount: 0 }
    channels.data.items.forEach((channel) => {
      const { subscriberCount, videoCount, viewCount } = channel.statistics
      statistics.subscriberCount += new Number(subscriberCount)
      statistics.videoCount += new Number(videoCount)
      statistics.viewCount += new Number(viewCount)
    })

    return res.status(200).json(statistics)
  }

  return res.status(404).json({ message: 'Not found' })
}

export default handler
