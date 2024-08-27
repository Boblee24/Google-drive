import { useState } from "react"

const useToggle = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleModalClick = () => {
        setIsOpen(prev => !prev)
    }
    return{isOpen, handleModalClick}
}

export default useToggle