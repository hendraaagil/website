import withPlaiceholder from '@plaiceholder/next'
import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default withContentlayer(withPlaiceholder(nextConfig))
