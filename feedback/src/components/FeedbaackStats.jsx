function FeedbackStats({ feedback }) {

  // calc avr
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length;

  return (
    <div className="feedback-stats">
      <h3>{feedback.length} Reviews</h3>
      <h3>Average Rating: {isNaN(average) ? 0 : average.toFixed(1)}</h3>
    </div>
  )
}

export default FeedbackStats;