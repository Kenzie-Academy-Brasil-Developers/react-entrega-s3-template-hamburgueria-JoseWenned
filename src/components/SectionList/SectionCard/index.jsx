import style from "./style.module.scss"

export const SectionCard = ( { product, handleAddProducts } ) => {
    
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