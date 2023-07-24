import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Notification = (children) => {
  const notify = () => toast(children.title)
  return (
      <div>
          <button onClick={notify}>Notify!</button>
          <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              style={{
                width: '50%',
                height: '100%',

                fontSize: '20px',
                textAlign: 'center',
                borderRadius: '10px',
                padding: '10px'
              }}
          />
      </div>
  )
}

export default Notification
