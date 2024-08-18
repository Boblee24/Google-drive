import {auth, provider} from "../config/firebase"
import { signInWithPopup } from 'firebase/auth'

const SignIn = () => {
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
    console.log(result)
  }
  return (
    <div className="bg-[red]">
        <h1>Logo</h1>
        <p>Some bollocks story just to fill something up her not that i know what to write exactly, make i just writ am sha</p>
        <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  )
}

export default SignIn