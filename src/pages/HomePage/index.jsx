import { Header } from "../../components/Header"
import { SectionList } from "../../components/SectionList"
import { Modal } from "../../components/Modal"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react"
import { TodoContext } from "../../providers"

export const HomePage = () => {

    const { isModal } = useContext(TodoContext)

    return(
        <>
            <ToastContainer/>
    
            <Header />
                
            <main>
                <SectionList />
            </main>

            {isModal && (
                <Modal />
            )}
        </>
    )
    
}