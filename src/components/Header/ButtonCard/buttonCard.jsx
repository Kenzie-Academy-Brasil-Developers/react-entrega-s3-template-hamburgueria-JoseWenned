import ImageCar from "../../../assets/car.png"
import { useState } from "react"
import { Modal } from "../../Modal/modal"

export const ButtonCard = () => {

    const [ isOpen, setIsOpen ] = useState(false)

    return(
        <>
            <button type="submit" onClick={() => setIsOpen(true)}><img src={ImageCar}></img></button>
            {isOpen ? <Modal setIsOpen={setIsOpen}></Modal> : null}
        </>
    )
}