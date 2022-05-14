function RepoItem({ repo }) {
  const {
    name,
    description,
    forks
  } = repo
  return (
    <div>
      <ul>
        <hr />
        <li>{name}</li>
        <li>{description}</li>
        <li>{forks}</li>

      </ul>
    </div>
  )
}
export default RepoItem