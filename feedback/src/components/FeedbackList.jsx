import FeedbackItem from "./FeedbackItem";


function FeedbackList({ feedback, handleDelete }) {

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback</p>
  }

  return (
    <div className="container">
      {feedback.map((item) => (
        <>
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        </>
      ))}
    </div>
  )
}
export default FeedbackList;