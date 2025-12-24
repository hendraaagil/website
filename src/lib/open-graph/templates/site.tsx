import { getEntry } from 'astro:content'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import satori from 'satori'

import config from '../config'

export default async (title?: string) => {
	const about = await getEntry('about', 'main')
	if (!about) throw new Error('About not found')

	const { name, headline } = about.data
	const avatarBuffer = await readFile(
		join(process.cwd(), 'src/data', './avatar.png'),
	)
	const avatar = avatarBuffer.toString('base64')

	return satori(
		<div
			style={{
				display: 'flex',
				width: '100%',
				height: '100%',
				backgroundColor: '#2b7fff',
			}}
		>
			<div
				style={{
					display: 'flex',
					width: '100%',
					height: '100%',
					padding: '36px 96px',
					backgroundImage:
						'linear-gradient(130deg, #0f172a 10%, rgba(15, 23, 42, 0.85) 45%, rgba(15, 23, 42, 0.65) 70%, #2b7fff 150%)',
					color: '#f8fafc',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div style={{ display: 'flex' }}>
					<img
						width={136}
						height={136}
						src={`data:image/png;base64,${avatar}`}
						alt="Logo"
						style={{ marginRight: '32px', borderRadius: '50%' }}
					/>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
						}}
					>
						<h1 style={{ margin: 0, marginBottom: '6px', fontSize: '48px' }}>
							{name}
						</h1>
						<p style={{ margin: 0, fontSize: '24px' }}>{title ?? headline}</p>
					</div>
				</div>
			</div>
		</div>,
		config,
	)
}
