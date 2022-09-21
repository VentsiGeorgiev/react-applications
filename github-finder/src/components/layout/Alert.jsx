import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

function Alert() {
  const { alert } = useContext(AlertContext)

  return alert !== null && (
    <div className='error-wrapper'>
    <p className='error'> {alert.type === 'error' && (
        <strong>{alert.msg}</strong>
        )}
      </p>
        </div>
  )

}
export default Alert