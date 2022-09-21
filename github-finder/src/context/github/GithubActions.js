const GITHUB_URL = process.env.REACT_APP_GITHUB_URL || "https://api.github.com"

// # Search users
export const searchUsers = async (text) => {
  try {
    const params = new URLSearchParams({
      q: text
    })

    console.log(text);

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`)
    const { items } = await res.json()

    return items
  } catch (error) {
    console.log(error);
  }

}

// # Single user
export const getUser = async (login) => {


  const res = await fetch(`${GITHUB_URL}/users/${login}`)


  // if (response.status === 404) {
  //   window.location = '/notfound'
  // } else {
  const data = await res.json()

  return data
  // }
}

// # User repos
export const getUserRepos = async (login) => {

  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10
  })


  const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params
    }`)
  const data = await res.json()

  return data
}