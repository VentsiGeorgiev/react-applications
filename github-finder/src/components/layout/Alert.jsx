import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

function Alert() {
  const { alert } = useContext(AlertContext)

  return alert !== null && (
    <p>
      {alert.type === 'error' && (
        <strong>{alert.msg}</strong>
      )}</p>
  )

}
export default Alert