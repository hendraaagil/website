import type { NextApiHandler } from 'next'
import { createClient } from '@supabase/supabase-js'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const supabase = createClient(process.env.SUPABASE_URL as string, process.env.SUPABASE_KEY as string)
    const [{ count: viewCount }, { count: visitorCount }] = await Promise.all([
      supabase.from('pageview').select('*', { count: 'exact', head: true }),
      supabase.from('session').select('*', { count: 'exact', head: true }),
    ])

    return res.status(200).json({
      viewCount,
      visitorCount,
    })
  }

  return res.status(404).json({ message: 'Not found' })
}

export default handler
