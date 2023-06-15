import ImageTrash from "../../assets/trash.png"
import { ModalOverLay, ModalBox } from "../../styles/modal"
import { useEffect, useRef } from "react"
 
export const Modal = ({children, setIsOpen}) => {
    const modalRef = useRef(null)      

    useEffect(() => {  
        const handleOutClick = (event) => {
            if(!modalRef.current?.contains(event.target)){
                setIsOpen(false)
            }
        }

        window.addEventListener("mousedown", handleOutClick)

        return() => {
            window.removeEventListener("mousedown", handleOutClick)
        }
    }, [])

    const buttonRef = useRef(null)

    useEffect(() => {

        const handleKeydown = (event) => {
            if(event.key === "Escape") {
                buttonRef.current?.click()
            }
        }

        window.addEventListener("keydown", handleKeydown)

        return() => {
            window.removeEventListener("keydown", handleKeydown)
        }
    }, [])

   return (
    <ModalOverLay>
        <ModalBox ref={modalRef}>
            <header>
                <h2>Shopping cart</h2>

                <button ref={buttonRef} onClick={() => setIsOpen(false)}>X</button>
            </header>

            <main>
                <div>
                    <img></img>
                    <h3></h3>

                    <button>
                        <img src={ImageTrash}></img>
                    </button>
                </div>
            </main>

            <footer>
                <p>Total</p>
                <p>$</p>

                <button>Delete All</button>
            </footer>
        </ModalBox>
    </ModalOverLay>
   )
}