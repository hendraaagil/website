import siteImage from './templates/site'
import postImage from './templates/post'
import projectImage from './templates/project'

export const generateSiteOgImage = (title?: string) => siteImage(title)

export const generatePostOgImage = (postId: string, url: string) =>
	postImage(postId, url)

export const generateProjectOgImage = (projectId: string, url: string) =>
	projectImage(projectId, url)
