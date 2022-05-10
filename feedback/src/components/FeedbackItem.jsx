import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({ item, handleDelete }) {



  return (
    <Card>
      <div className="num">{item.rating}</div>


      <div className="buttons">
        <button onClick={() => handleDelete(item.id)} className='close'>
          <FaTimes />
        </button>
      </div>



      <div className="text">{item.text}</div>
    </Card>
  )
}
export default FeedbackItem;