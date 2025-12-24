import { getEntry } from 'astro:content'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import satori from 'satori'

import config from '../config'
import { getLinkFromOpenGraphUrl } from '@/lib/utils'

export default async (postId: string, url: string) => {
	const [about, post] = await Promise.all([
		getEntry('about', 'main'),
		getEntry('post', postId),
	])
	if (!about) throw new Error('About not found')
	if (!post) throw new Error('Post not found')

	const { name, headline } = about.data
	const { title } = post.data
	const [avatarBuffer, thumbnailBuffer] = await Promise.all([
		readFile(join(process.cwd(), 'src/data', './avatar.png')),
		readFile(
			join(process.cwd(), 'src/content/post', postId, './thumbnail.png'),
		),
	])
	const avatar = avatarBuffer.toString('base64')
	const thumbnail = thumbnailBuffer.toString('base64')

	return satori(
		<div
			style={{
				display: 'flex',
				width: '100%',
				height: '100%',
				backgroundImage: `url('data:image/png;base64,${thumbnail}')`,
				backgroundSize: 'cover',
			}}
		>
			<div
				style={{
					width: '100%',
					height: '100%',
					padding: '36px 72px',
					backgroundImage:
						'linear-gradient(130deg, #0F172A 10%, rgba(15, 23, 42, 0.85) 50%, rgba(15, 23, 42, 0.65) 75%, rgba(15, 23, 42, 0.5) 150%)',
					color: '#F8FAFC',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
			>
				<p style={{ fontSize: '18px' }}>{getLinkFromOpenGraphUrl(url)}</p>
				<h1 style={{ fontSize: '64px' }}>{title}</h1>
				<div style={{ display: 'flex' }}>
					<img
						width={64}
						height={64}
						src={`data:image/png;base64,${avatar}`}
						alt="Logo"
						style={{ marginRight: '12px', borderRadius: '50%' }}
					/>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
						}}
					>
						<h1 style={{ margin: 0, marginBottom: '6px', fontSize: '24px' }}>
							{name}
						</h1>
						<p style={{ margin: 0, fontSize: '18px' }}>{headline}</p>
					</div>
				</div>
			</div>
		</div>,
		config,
	)
}
