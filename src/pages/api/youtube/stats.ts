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

    const response = await youtube.channels.list({
      // @ts-ignore
      id: 'UCy44Cn1aBo3LYrZsh2gKGIA',
      part: 'statistics',
    })

    // @ts-ignore
    const channel = response.data.items[0]
    const { subscriberCount, videoCount, viewCount } = channel.statistics

    return res.status(200).json({
      subscriberCount,
      videoCount,
      viewCount,
    })
  }

  return res.status(404).json({ message: 'Not found' })
}

export default handler
