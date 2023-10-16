import type { NextApiHandler } from 'next'
import { google, youtube_v3 } from 'googleapis'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
    })

    const youtube: youtube_v3.Youtube = google.youtube({
      auth,
      version: 'v3',
    })

    const channelIds = ['UCy44Cn1aBo3LYrZsh2gKGIA', 'UC-8I6YXDaagpTHTWM5GYl8Q']
    const channels = await youtube.channels.list({
      id: channelIds,
      part: ['statistics'],
    })

    const statistics = { subscriberCount: 0, videoCount: 0, viewCount: 0 }
    const channelItems = channels.data.items as youtube_v3.Schema$Channel[]
    channelItems.forEach((channel) => {
      const { subscriberCount, videoCount, viewCount } = channel.statistics as youtube_v3.Schema$ChannelStatistics
      statistics.subscriberCount += Number(subscriberCount)
      statistics.videoCount += Number(videoCount)
      statistics.viewCount += Number(viewCount)
    })

    return res.status(200).json(statistics)
  }

  return res.status(404).json({ message: 'Not found' })
}

export default handler
