/* eslint-disable @next/next/no-img-element */
import fs from 'fs/promises'
import path from 'path'
import { NextRequest } from 'next/server'
import { ImageResponse } from 'next/og'

import { env } from '@/lib/constants'

export async function GET(request: NextRequest) {
	const siteUrl = env.url.website
	const logoUrl = `${siteUrl}/assets/main/logo-rounded.png`

	const { searchParams } = request.nextUrl
	const title = searchParams.get('title') || 'Software Developer'

	const [gabaritoRegular, gabaritoBold] = await Promise.all([
		fs.readFile(
			path.join(process.cwd(), 'public', 'fonts', 'Gabarito-Regular.ttf'),
		),
		fs.readFile(
			path.join(process.cwd(), 'public', 'fonts', 'Gabarito-Bold.ttf'),
		),
	])

	return new ImageResponse(
		<div
			style={{
				display: 'flex',
				width: '100%',
				height: '100%',
				backgroundColor: '#2A61CC',
			}}
		>
			<div
				style={{
					display: 'flex',
					width: '100%',
					height: '100%',
					padding: '36px 96px',
					backgroundImage:
						'linear-gradient(130deg, #0F172A 10%, rgba(15, 23, 42, 0.85) 50%, rgba(15, 23, 42, 0.65) 75%, #2A61CC 150%)',
					color: '#F8FAFC',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div style={{ display: 'flex' }}>
					<img
						width={134}
						height={134}
						src={logoUrl}
						alt="Logo"
						style={{ marginRight: '32px' }}
					/>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
						}}
					>
						<h1 style={{ margin: 0, marginBottom: '6px', fontSize: '48px' }}>
							Hendra Agil
						</h1>
						<p style={{ margin: 0, fontSize: '24px' }}>{title}</p>
					</div>
				</div>
			</div>
		</div>,
		{
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
		},
	)
}
