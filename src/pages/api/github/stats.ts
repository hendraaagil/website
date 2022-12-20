import type { NextApiHandler } from 'next'
import type { GithubRepository, GithubUserProfile } from '@/types/github'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const userResponse = await fetch('https://api.github.com/users/hendraaagil')
    const userReposResponse = await fetch('https://api.github.com/users/hendraaagil/repos?per_page=100')

    const user: GithubUserProfile = await userResponse.json()
    const repositories: GithubRepository[] = await userReposResponse.json()

    const mine = repositories.filter((repo) => !repo.fork)
    const stars = mine.reduce((accumulator, repository) => {
      return accumulator + repository['stargazers_count']
    }, 0)

    return res.status(200).json({
      user: {
        username: user.login,
        avatarUrl: user.avatar_url,
        name: user.name,
        publicRepos: user.public_repos,
        publicGists: user.public_gists,
        followers: user.followers,
        following: user.following,
      },
      stars,
    })
  }

  return res.status(404).json({ message: 'Not found' })
}

export default handler
