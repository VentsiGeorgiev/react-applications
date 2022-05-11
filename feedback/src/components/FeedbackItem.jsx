import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {

  const { deleteFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num">{item.rating}</div>


      <div className="buttons">
        <button onClick={() => deleteFeedback(item.id)} className='close'>
          <FaTimes />
        </button>
      </div>



      <div className="text">{item.text}</div>
    </Card>
  )
}
export default FeedbackItem;