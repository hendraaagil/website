import { getPlaiceholder } from 'plaiceholder'

export const generateBase64Image = async (imageUrl: string) => {
  const resBuffer = await fetch(imageUrl)
  const arrayBuffer = await resBuffer.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  const { base64 } = await getPlaiceholder(buffer)
  return base64
}
