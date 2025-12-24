import { Resvg } from '@resvg/resvg-js'
import siteImage from './templates/site'
import postImage from './templates/post'
import projectImage from './templates/project'

const svgToPngBuffer = (svg: string) => {
	const resvg = new Resvg(svg)
	const pngData = resvg.render()
	return pngData.asPng()
}

export const generateSiteOgImage = async (title?: string) => {
	const svg = await siteImage(title)
	return new Uint8Array(svgToPngBuffer(svg))
}

export const generatePostOgImage = async (postId: string, url: string) => {
	const svg = await postImage(postId, url)
	return new Uint8Array(svgToPngBuffer(svg))
}

export const generateProjectOgImage = async (
	projectId: string,
	url: string,
) => {
	const svg = await projectImage(projectId, url)
	return new Uint8Array(svgToPngBuffer(svg))
}
