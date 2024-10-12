import {
  fetchGithubStats,
  fetchWakatimeStats,
  fetchWebsiteStats,
  fetchYoutubeStats,
} from '@/lib/server/stats'
import { DashboardCard } from '@/components/dashboard'

const url = {
  analytic: '/analytics',
  github: 'https://github.com/hendraaagil',
  wakatime: 'https://wakatime.com/@hendraaagil',
  youtube: 'https://youtube.com/@hendraaagil',
}

export const GithubStars = async () => {
  const githubStats = await fetchGithubStats()

  return (
    <DashboardCard
      title="GitHub Stars"
      link={url.github}
      count={githubStats?.stars}
    />
  )
}

export const WebsiteViews = async () => {
  const websiteStats = await fetchWebsiteStats()

  return (
    <DashboardCard
      title="All-Time Views"
      link={url.analytic}
      count={websiteStats?.viewCount}
    />
  )
}

export const WebsiteVisitors = async () => {
  const websiteStats = await fetchWebsiteStats()

  return (
    <DashboardCard
      title="All-Time Visitors"
      link={url.analytic}
      count={websiteStats?.visitorCount}
    />
  )
}

export const CodingHours = async () => {
  const wakatimeStats = await fetchWakatimeStats()

  return (
    <DashboardCard
      title="Coding Hours"
      link={url.wakatime}
      count={wakatimeStats?.codingHours}
    />
  )
}

export const YoutubeViews = async () => {
  const youtubeStats = await fetchYoutubeStats()

  return (
    <DashboardCard
      title="YouTube Views"
      link={url.youtube}
      count={youtubeStats?.viewCount}
    />
  )
}

export const YoutubeVideos = async () => {
  const youtubeStats = await fetchYoutubeStats()

  return (
    <DashboardCard
      title="YouTube Videos"
      link={url.youtube}
      count={youtubeStats?.videoCount}
    />
  )
}
