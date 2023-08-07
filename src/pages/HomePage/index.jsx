import { Header } from "../../components/Header"
import { SectionList } from "../../components/SectionList"
import { useEffect, useState } from "react"
import { Api } from "../../services/Api"
import { Modal } from "../../components/Modal"

export const HomePage = () => {

    const [products, setProductList] = useState([])
    const [addProduct, setAddProduct] = useState([])
    const [isModal, setIsModal] = useState(false)
    const [isCount, setIsCount] = useState(0)
    const [valueTotal, setValueTotal] = useState(0)
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {

        const handleProducts = async () => {

            try{
                const {data} = await Api.get("/products")
                setProductList(data)
            } catch (error) {
                console.log(error)
            }

        }

        handleProducts() 

        const CartItemsLocalStotage = localStorage.getItem("cartItems")
        if(CartItemsLocalStotage){
            setAddProduct(JSON.parse(CartItemsLocalStotage))
        }

    }, [])

    const handleCount = () => {
        setIsCount(isCount + 1)
    }

    const handleSubCount = () => {
        setIsCount(isCount - 1)
    }

    const addValueTotal = () => {

        if(addProduct.length === 0){
            return 0
        }

        const Total = products.reduce((acc, current) => acc + current.price)
    }

    const handleAddProducts = (product) => {

    
        const isProductCart = addProduct.some((item) => item.id === product.id)

        if(isProductCart) {

            console.log("Has already been added")

        }else {

            setAddProduct([...addProduct, product])
            setIsModal(true)
            handleCount()
            setValueTotal(valueTotal + product.price)

        }

        localStorage.setItem("cartItems", JSON.stringify([...addProduct, product]))

    }

    const handleRemoveProduct = (product) => {

        const upDataCart = addProduct.filter((p) => p.id !== product.id)

        if(upDataCart.length !== 0){
            
            const TotalValue = upDataCart.reduce((acc, current) => acc + current.price)
            setValueTotal(TotalValue)
          
        
        }
        
        setValueTotal(0)
        setAddProduct(upDataCart)
        handleSubCount()

        localStorage.setItem("cartItems", JSON.stringify(upDataCart))
    }

    const removeAll = () => {

        setIsCount(0)
        setAddProduct([])
        setValueTotal(0)

        localStorage.removeItem("cartItems")
    }
    
    const handleSearch = () => {

        setSearchTerm(searchTerm)

    }

    const FilteredProductsList = products.filter((product) => {

        return product.name.toLowerCase().includes(searchTerm.toLowerCase())

    })


    return(
        <>
                <Header 

                    setIsModal={setIsModal} 
                    isCount={isCount} 
                    searchTerm={searchTerm} 
                    setSearchTerm={setSearchTerm}
                    handleSearch={handleSearch}
                   

                />

            <main>
                <SectionList 

                    searchTerm={searchTerm} 
                    products={products} 
                    handleAddProducts={handleAddProducts}
                    FilteredProductsList={FilteredProductsList}

                />
            </main>

            {isModal && (
                <Modal 
                 
                    setIsModal={setIsModal} 
                    setAddProduct={setAddProduct}
                    handleRemoveProduct={handleRemoveProduct}
                    setIsCount={setIsCount}
                    addValueTotal={addValueTotal}
                    valueTotal={valueTotal}
                    setValueTotal={setValueTotal}
                    isCount={isCount}
                    addProduct={addProduct}
                    products={products}
                    removeAll={removeAll}
                
                />
            )}

        </>
    )
    
}