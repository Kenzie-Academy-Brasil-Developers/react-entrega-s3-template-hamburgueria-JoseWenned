
import { SectionCard } from "./SectionCard"
import style from "./style.module.scss"

export const SectionList = ( { handleAddProducts, FilteredProductsList } ) => {

    return(
        <div className={style.container}>
            <ul className={style.containerList}>
                {FilteredProductsList.map((product) => 
                <SectionCard 

                    key={product.id} 
                    product={product} 
                    handleAddProducts={handleAddProducts} 

                />)}
            </ul>
        </div>

    );

};