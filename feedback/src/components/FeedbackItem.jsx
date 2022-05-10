import Card from './shared/Card';

function FeedbackItem({ item }) {

  return (
    <Card>
      <div className="num">{item.rating}</div>
      <div className="text">{item.text}</div>
    </Card>
  )
}
export default FeedbackItem;