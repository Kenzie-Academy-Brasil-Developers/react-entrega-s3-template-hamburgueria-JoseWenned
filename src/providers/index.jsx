import { createContext } from "react";
import { useEffect, useState } from "react";
import { Api } from "../services/Api"
import { toast } from "react-toastify";
import { useQuery } from "react-query";

export const TodoContext = createContext({})

export const ThemeContext = ( { children } ) => {

    const [addProduct, setAddProduct] = useState([])
    const [isModal, setIsModal] = useState(false)
    const [isCount, setIsCount] = useState(JSON.parse(localStorage.getItem("cartItemCount")) || 0)
    const [valueTotal, setValueTotal] = useState(JSON.parse(localStorage.getItem("cartValueTotal")) || 0)
    const [searchTerm, setSearchTerm] = useState("")

    const {data: listProduct} = useQuery({queryKey:["item"], queryFn: async () => {
        const {data} = await Api.get("/products")
        return data
    }})

    useEffect(() => {

        localStorage.setItem("cartValueTotal", JSON.stringify(valueTotal))

    }, [valueTotal])

    
    useEffect(() => {

        localStorage.setItem("cartItemCount", JSON.stringify(isCount))
        
    }, [isCount])

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

        const Total = listProduct.reduce((acc, current) => acc + current.price)
    }

    const handleAddProducts = (product) => {

        const isProductCart = addProduct.some((item) => item.id === product.id)
        
        if(isProductCart) {

                toast.error('Already added to cart', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            
        }else {

            setAddProduct([...addProduct, product])
            handleCount()
            setValueTotal(valueTotal + product.price)

            toast.success('Added to cart', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }

        localStorage.setItem("cartItems", JSON.stringify([...addProduct, product]))

    }

    const handleRemoveProduct = (product) => {

        const upDataCart = addProduct.filter((p) => p.id !== product.id)

        if(upDataCart.length !== 0){
            
            const TotalValue = upDataCart.reduce((acc, current) => acc + current.price, 0)
            setValueTotal(TotalValue)
          
        } 

        setValueTotal(valueTotal - product.price)
        setAddProduct(upDataCart)
        handleSubCount()

        localStorage.setItem("cartItems", JSON.stringify(upDataCart))

    }

    const removeAll = () => {

        setIsCount(0)
        setAddProduct([])
        setValueTotal(0)

        localStorage.removeItem("cartItems")
        localStorage.removeItem("cartValueTotal")

    }

    const handleSearch = () => {

        setSearchTerm(searchTerm)

    }

    const FilteredProductsList = listProduct?.filter((product) => {

        return product.name.toLowerCase().includes(searchTerm.toLowerCase())

    },)

    return(
        <TodoContext.Provider value={{ 
            addValueTotal, 
            handleAddProducts, 
            handleRemoveProduct, 
            removeAll,
            handleSearch,
            FilteredProductsList,
            isModal,
            setIsModal,
            isCount,
            setSearchTerm,
            searchTerm,
            setAddProduct,
            valueTotal,
            addProduct,
            }}>
            {children}
        </TodoContext.Provider>
    )

}