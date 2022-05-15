function RepoItem({ repo }) {
  const {
    name,
    description,
    forks
  } = repo
  return (
    <div className="repo-card">
      <ul>

        <li>Name: {name}</li>
        <li>Description: {description}</li>
        <li>Forks: {forks}</li>

      </ul>
    </div>
  )
}
export default RepoItem