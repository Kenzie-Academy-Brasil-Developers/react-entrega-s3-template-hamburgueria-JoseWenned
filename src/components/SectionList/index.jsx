
import { useContext } from "react";
import { SectionCard } from "./SectionCard"
import style from "./style.module.scss"
import { TodoContext } from "../../providers";

export const SectionList = () => {

    const { handleAddProducts, FilteredProductsList} = useContext(TodoContext)

    return(
        <div className={style.container}>
            <ul className={style.containerList}>
                {FilteredProductsList?.map((product) => 
                <SectionCard 

                    key={product.id} 
                    product={product} 
                    handleAddProducts={handleAddProducts} 

                />)}
            </ul>
        </div>

    );

};