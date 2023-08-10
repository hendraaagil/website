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

    const [response, secondResponse] = await Promise.all([
      youtube.channels.list({
        id: 'UCy44Cn1aBo3LYrZsh2gKGIA',
        part: 'statistics',
      }),
      youtube.channels.list({
        id: 'UC-8I6YXDaagpTHTWM5GYl8Q',
        part: 'statistics',
      }),
    ])

    const channel = response.data.items[0]
    const secondChannel = secondResponse.data.items[0]
    const { subscriberCount, videoCount, viewCount } = channel.statistics
    const {
      subscriberCount: secondSubscriberCount,
      videoCount: secondVideoCount,
      viewCount: secondViewCount,
    } = secondChannel.statistics

    return res.status(200).json({
      subscriberCount: new Number(subscriberCount) + new Number(secondSubscriberCount),
      videoCount: new Number(videoCount) + new Number(secondVideoCount),
      viewCount: new Number(viewCount) + new Number(secondViewCount),
    })
  }

  return res.status(404).json({ message: 'Not found' })
}

export default handler
