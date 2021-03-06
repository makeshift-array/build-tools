// 200
export const ok200 = {
  status: 200,
  responseText: JSON.stringify({
    avatar_url: "https://avatars1.githubusercontent.com/u/1375616?v=3",
    bio: "mek a d weeb fun",
    blog: null,
    company: "Verndale",
    created_at: "2012-01-24T16:19:15Z",
    email: "denniswaltermartinez@gmail.com",
    events_url: "https://api.github.com/users/DennisMartinez/events{/privacy}",
    followers: 13,
    followers_url: "https://api.github.com/users/DennisMartinez/followers",
    following: 15,
    following_url: "https://api.github.com/users/DennisMartinez/following{/other_user}",
    gists_url: "https://api.github.com/users/DennisMartinez/gists{/gist_id}",
    gravatar_id: "",
    hireable: true,
    html_url: "https://github.com/DennisMartinez",
    id: 1375616,
    location: "CO",
    login: "DennisMartinez",
    name: "Dennis Martinez",
    organizations_url: "https://api.github.com/users/DennisMartinez/orgs",
    public_gists: 20,
    public_repos: 10,
    received_events_url: "https://api.github.com/users/DennisMartinez/received_events",
    repos_url: "https://api.github.com/users/DennisMartinez/repos",
    site_admin: false,
    starred_url: "https://api.github.com/users/DennisMartinez/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/DennisMartinez/subscriptions",
    type: "User",
    updated_at: "2017-03-25T16:42:02Z",
    url: "https://api.github.com/users/DennisMartinez"
  })
}

// 404
export const notFound404 = {
  status: 404,
  responseText: JSON.stringify({
    documentation_url: "https://developer.github.com/v3",
    message: "Not Found"
  })
}
