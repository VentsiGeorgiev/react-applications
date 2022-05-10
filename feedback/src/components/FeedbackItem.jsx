function FeedbackItem({ item }) {

  return (
    <div className="card">
      <div className="num">{item.rating}</div>
      <div className="num">{item.text}</div>
    </div>
  )
}
export default FeedbackItem;