import './App.css'
import { auth } from './config/firebase'
import Home from './pages/Home'
import {useAuthState} from 'react-firebase-hooks/auth'
import SignIn from './pages/SignIn'

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className='overflow-hidden'>
      {
        user ? <Home/> : <SignIn/>
      }
    </div>
  )
}

export default App
