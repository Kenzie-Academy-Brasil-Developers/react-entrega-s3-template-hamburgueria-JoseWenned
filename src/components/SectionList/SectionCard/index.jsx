import { useContext } from "react"
import style from "./style.module.scss"
import { TodoContext } from "../../../providers"

export const SectionCard = ({ product }) => {

    const {  handleAddProducts } = useContext(TodoContext)
    
    return(

        <li className={style.containerCart}>

            <div className={style.backgroundImage}>

                <img src={product.img} />

            </div>

            <div className={style.containerDescription}> 

                <h3 className={style.TitleCart}>{product.name}</h3>
                <p className={style.categories}>{product.category}</p>
                <p className={style.price}>{product.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</p>
                <button className={style.button} onClick={() => handleAddProducts(product)} type="submit">To add</button>

            </div>

        </li>

    )

}