import type { GithubRepository, GithubUserProfile } from '@/types/github'
import { env } from '@/lib/constants'

export const fetchGithubStats = async () => {
  try {
    const headers: HeadersInit = {
      Authorization: 'Bearer ' + env.github.token,
    }
    const [userResponse, reposResponse] = await Promise.all([
      fetch('https://api.github.com/users/hendraaagil', { headers }),
      fetch('https://api.github.com/users/hendraaagil/repos?per_page=100', {
        headers,
      }),
    ])

    const [user, repositories]: [GithubUserProfile, GithubRepository[]] =
      await Promise.all([userResponse.json(), reposResponse.json()])

    const mine = repositories.filter((repo) => !repo.fork)
    const stars = mine.reduce((accumulator, repository) => {
      return accumulator + repository['stargazers_count']
    }, 0)

    return {
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
    }
  } catch (error) {
    console.error(error)
    return null
  }
}
