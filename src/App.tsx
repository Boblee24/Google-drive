import './App.css';
import { auth } from './config/firebase';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while authentication is being checked
  }

  return (
    <div className='overflow-hidden'>
      <Routes>
        <Route path='*' element={user ? <Home /> : <Navigate to="/signin" />} />
        <Route path='/signin' element={user ? <Navigate to="/" /> : <SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
