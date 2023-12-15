import { google, youtube_v3 } from 'googleapis'
import { env } from '@/lib/constants'

export const fetchYoutubeStats = async () => {
  try {
    const channelIds = ['UCy44Cn1aBo3LYrZsh2gKGIA', 'UC-8I6YXDaagpTHTWM5GYl8Q']
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: env.google.clientEmail,
        private_key: env.google.privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
    })

    const youtube: youtube_v3.Youtube = google.youtube({ auth, version: 'v3' })
    const channels = await youtube.channels.list({
      id: channelIds,
      part: ['statistics'],
    })

    const statistics = { subscriberCount: 0, videoCount: 0, viewCount: 0 }
    const channelItems = channels.data.items as youtube_v3.Schema$Channel[]

    channelItems.forEach((channel) => {
      const { subscriberCount, videoCount, viewCount } =
        channel.statistics as youtube_v3.Schema$ChannelStatistics
      statistics.subscriberCount += Number(subscriberCount)
      statistics.videoCount += Number(videoCount)
      statistics.viewCount += Number(viewCount)
    })

    return statistics
  } catch (error) {
    console.error(error)
    return null
  }
}
