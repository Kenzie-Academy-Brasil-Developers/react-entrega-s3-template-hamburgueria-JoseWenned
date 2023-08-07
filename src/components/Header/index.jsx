
import imageCar from "../../assets/car.png"
import imageSearch from "../../assets/interrogation.png"
import style from "./style.module.scss"

export const Header = ( { setIsModal, isCount, setSearchTerm, searchTerm } ) => {
    
    const openModal = () => {

        setIsModal(true)
        
    }

    const handleInputSearch = (event) => {

        setSearchTerm(event.target.value)
        console.log(searchTerm)

    }

    return(
        <>
            <div>
                <h1>Burguer</h1>
                <span>Kenzie</span>
            </div> 

            <div>
                <img onClick={openModal} src={imageCar} />
                <span>{isCount}</span>
            </div>

            <div>
                <input 
                
                    type="text" 
                    placeholder="Search your burguer"
                    value={searchTerm}
                    onChange={handleInputSearch} 

                />

                <img 

                    className={style.imageSearch} 
                    src={imageSearch}

                />
            </div>
        </>
    )
}