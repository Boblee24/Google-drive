import { useNavigate } from "react-router-dom"
import {auth, provider} from "../config/firebase"
import { signInWithPopup } from 'firebase/auth'

const SignIn = () => {
  const navigate = useNavigate()
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      navigate("/"); 
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  }
  return (
    <div className="bg-[red]">
        <h1>Logo</h1>
        <p>Some bollocks story just to fill something up her not that i know what to write exactly, make i just writ am shall we</p>
        <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  )
}

export default SignIn