import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num">{item.rating}</div>

      <div className="buttons">
        <button onClick={() => deleteFeedback(item.id)} className='close'>
          <FaTimes />
        </button>
        <button onClick={() => editFeedback(item)} className='close'>
          <FaEdit />
        </button>
      </div>



      <div className="text">{item.text}</div>
    </Card>
  )
}
export default FeedbackItem;