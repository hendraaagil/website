export type GithubUserProfile = {
  login: string
  id: number
  avatar_url: string
  name: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
}

export type GithubRepository = {
  id: number
  name: string
  fork: boolean
  stargazers_count: number
}

export type GithubApiResponse = {
  user: {
    username: string
    avatarUrl: string
    name: string
    publicRepos: number
    publicGists: number
    followers: number
    following: number
  }
  stars: number
}
