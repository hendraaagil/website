import type { ImageResponseOptions } from '@vercel/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const createConfig = async (): Promise<ImageResponseOptions> => {
	const [gabaritoRegular, gabaritoBold] = await Promise.all([
		readFile(
			join(process.cwd(), 'src/lib/open-graph', './fonts/gabarito-400.ttf'),
		),
		readFile(
			join(process.cwd(), 'src/lib/open-graph', './fonts/gabarito-700.ttf'),
		),
	])

	return {
		width: 1200,
		height: 630,
		emoji: 'fluent',
		fonts: [
			{
				data: gabaritoRegular,
				name: 'Gabarito',
				weight: 400,
			},
			{
				data: gabaritoBold,
				name: 'Gabarito',
				weight: 700,
			},
		],
	}
}

export default await createConfig()
