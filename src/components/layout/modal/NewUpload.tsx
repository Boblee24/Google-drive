const NewUpload = () => {
  return (
    <div className="bg-slate-300 absolute">
      <div>
        <button>
          New Folder
        </button>
      </div>
      <div>
        <button onClick={() =>console.log("create file")}>File Upload</button>
        <button onClick={() => console.log("create folder")}>Folder Upload</button>
      </div>
    </div>

  )
}

export default NewUpload