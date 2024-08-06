import { XMarkIcon } from "@heroicons/react/24/outline";

interface DetailProps {
    isDetail : boolean;
    handleDetail: () => void;
}

const Details: React.FC<DetailProps> = ({isDetail, handleDetail}) => {
  return (
      <div
          style={{
              width: isDetail ? '0' : '350px',
              padding: isDetail ? '0' : '1rem',
          }}
          className="bg-white h-full rounded-3xl m-auto  text-3xl font-bold transition-all duration-300 ease-in-out overflow-hidden"
      >
          <button className="flex justify-end ml-auto hover:bg-slate-200 p-3 rounded-full" onClick={handleDetail}><XMarkIcon className="h-6 w-6 " /></button>
      </div>
  )
}

export default Details