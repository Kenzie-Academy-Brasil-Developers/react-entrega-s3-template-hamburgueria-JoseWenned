
import { useState } from "react"
import ImageInterrogation from "../../assets/interrogation.png"
import { ButtonCard } from "./ButtonCard/buttonCard"

export const Header = () => {

    const [products, setProducts] = useState([])
    const [inputSearch, setInputSearch] = useState("")

    const filteredProducts = products.filter(
        products => products.name.toUpperCase().includes(inputSearch.toUpperCase())
    )

    return(
        <div>
            <h1>Burguer <span>kenzie</span></h1>
            <ButtonCard />
            <span>0</span>

            <input type="text" placeholder="Type search"></input>
            
            <button type="submit">
                <img src={ImageInterrogation}></img>
            </button>
        </div>
    )
}