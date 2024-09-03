import fs from 'fs/promises'
import path from 'path'
import { getPlaiceholder } from 'plaiceholder'

export const generateBase64Image = async (imageUrl: string) => {
	const file = await fs.readFile(path.join(process.cwd(), 'public', imageUrl))
	const { base64 } = await getPlaiceholder(file)
	return base64
}
