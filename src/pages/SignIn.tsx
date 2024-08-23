import { useNavigate } from "react-router-dom";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import logo from "../assets/drive-48.svg"

const SignIn = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] text-center">
        <div className="flex justify-center mb-3">
          <img src={logo} alt="logo" className="w-13 h-13" />
        </div>
        <p className="text-gray-700 mb-6">
          Some story here just to fill space. Not sure what to write exactly,
          so let's just fill it up for now.
        </p>
        <button
          onClick={signInWithGoogle}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
