    export const SectionCard = ( { product, handleAddProducts } ) => {
    
    return(

        <li>

            <img src={product.img} />
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p>{product.price}</p>
            <button onClick={() => handleAddProducts(product)} type="submit">To add</button>

        </li>

    )

}