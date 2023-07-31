import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Notification = ({ message, type }) => {
  const a = '1'

  //

  const notify = () => {
    switch (type) {
      case 'success':
        toast.success(a)

        break
      case 'error':
        toast.error(message)
        break
      case 'warning':
        toast.warning(message)
        break
      default:
        toast.info(message)
        break
    }
  }

  return (
    <div>
      {notify()}
      <ToastContainer
        position="top-center"

      />
    </div>
  )
}

export default Notification
