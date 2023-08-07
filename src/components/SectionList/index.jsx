
import { SectionCard } from "./SectionCard"

export const SectionList = ( { handleAddProducts, FilteredProductsList } ) => {

    return(

        <ul>
            {FilteredProductsList.map((product) => 
            <SectionCard 

                key={product.id} 
                product={product} 
                handleAddProducts={handleAddProducts} 

            />)}
        </ul>

    );

};