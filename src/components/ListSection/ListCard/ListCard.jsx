import { useEffect, useState } from "react"
import { Api } from "../../../services/Api"

export const ListCard = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        const getProducts = async () => {
            try {
                const response = await Api.get("/products")

                setProducts(response.data)
            } catch (error) {
                console.error(error)
            }
            
        }

        getProducts()
    }, [])

    return(
        <li>
            {
                products.map((product) => {
                    return(
                        <div key={product.id}>
                            <img src={product.img}></img>
                            <h3>{product.name}</h3>
                            <p>{product.category}</p>
                            <p>${product.price}</p>
                            <button type="submit">to add</button>
                        </div>
                    )
                })
            }
        </li>
    )
}