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

    }

    const handleRemoveProduct = (product) => {

        const upDateProduct = addProduct.filter((p) => p.id !== product.id)
        const removedProduct = addProduct.find((p) => p.id === product.id)

        const newValueTotal = valueTotal - removedProduct
       
        setAddProduct(upDateProduct)
        setValueTotal(newValueTotal)
        handleSubCount()
    
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
                
                />
            )}

        </>
    )
    
}