import style from "./style.module.scss"
import XModal from "../../assets/X.png"
import trashModal from "../../assets/trash.png"

export const Modal = ( { products, setIsModal, setAddProduct, handleRemoveProduct, setIsCount, valueTotal, setValueTotal, addProduct } ) => {
    

    const removeAll = () => {

        setIsCount(0)
        setAddProduct([])
        setValueTotal(0)

    }

    const closeModal = () => {
        setIsModal(false)
    }

    return(
        
        <div>
            <header className={style.containerHeader}>

                <h2>Shopping carts</h2>
                <img onClick={closeModal} src={XModal} alt="Close"/>

            </header>

            {setAddProduct.length !== 0 ? 
            <section>
                <ul>
                    {addProduct.map((product) => (
                        <li key={product.id}>
                            <img src={product.img} />
                            <h3>{product.name}</h3>
                            <img onClick={handleRemoveProduct} src={trashModal} alt="Excluir"/>
                        </li>
                    ))}
                </ul>
            </section> : (<p>Cart empty</p>)}
            

            <footer>

                <p>Total</p>
                <span>{valueTotal.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</span>
                <button type="submit" onClick={removeAll}>Remove All</button>

            </footer>
        </div>
        
    )

}