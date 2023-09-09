import style from "./style.module.scss"
import XModal from "../../assets/X.png"
import trashModal from "../../assets/trash.png"
import { useContext } from "react"
import { TodoContext } from "../../providers"

export const Modal = () => {
    
    const { setIsModal, setAddProduct, handleRemoveProduct, valueTotal, addProduct, removeAll } = useContext(TodoContext)

    const closeModal = () => {
        setIsModal(false)
    }

    return(

        <div className={style.overlay}>
            <div className={style.container}>
                <header className={style.containerHeader}>

                    <h2 className={style.titleCart}>Shopping carts</h2>
                    <p className={style.closeX} onClick={closeModal}>X</p>

                </header>

                {setAddProduct.length !== 0 ? 
                <section className={style.constainerSection}>
                    <ul>
                     
                        {addProduct.map((product) => (
                            <li className={style.List} key={product.id}>
                                <img className={style.imageProduct} src={product.img} />
                                <div className={style.information}>
                                    <h3 className={style.nameProduct}>{product.name}</h3>
                                    <img className={style.trash} onClick={() => handleRemoveProduct(product)} src={trashModal} alt="Excluir"/>
                                </div>
                            </li>
                        ))}
                    
                    </ul>
                </section> : (<p>Cart empty</p>)}
                

                <footer className={style.containerFooter}>

                    <div className={style.containeTotal}>
                        <p className={style.Total}>Total</p>
                        <span className={style.Value}>{valueTotal.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</span>
                    </div>
                    
                    <div className={style.containerButton}>
                        <button className={style.buttonRemove} type="submit" onClick={removeAll}>Remove All</button>
                    </div>

                </footer>
            </div>
        </div>
        
    )

}