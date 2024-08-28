import { useState } from "react"
import { storage } from "../../../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import {v4 as uuidv4} from "uuid"

const Upload = () => {
  const [fileUpload, setFileUpload] = useState<File | null>(null);// this is to save the file in a state before sending it to firebase
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.files) {
      setFileUpload(event.target.files[0])
    }
  }
  // useEffect(() => {
  //   console.log(fileUpload)
  // }, [fileUpload])
  const uploadFile = () => {
    if(fileUpload == null) return;
    const fileRef = ref(storage, `file 1/${fileUpload.name + uuidv4()}`);
    uploadBytes(fileRef, fileUpload)
  }
  return (
    <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={uploadFile}>Upload file</button>
    </div>
  )
}

export default Upload