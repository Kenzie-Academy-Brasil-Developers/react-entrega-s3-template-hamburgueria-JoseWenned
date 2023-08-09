
import imageCar from "../../assets/car.png"
import imageSearch from "../../assets/interrogation.png"
import style from "./style.module.scss"

export const Header = ( { setIsModal, isCount, setSearchTerm, searchTerm } ) => {
    
    const openModal = () => {

        setIsModal(true)
        
    }

    const handleInputSearch = (event) => {

        setSearchTerm(event.target.value)
    
    }

    return(
        <header className={style.containerHeader}>
            <div className={style.containerSubHeader}>

                <div className={style.firstContainer}>

                    <div className={style.containerTitle}>
                        <h1 className={style.titleLogo}>Burguer</h1>
                        <span className={style.titleSubLogo}>Kenzie</span>
                    </div>
            
                    <div className={style.containerImageCart}>
                        <img className={style.imageCart} onClick={openModal} src={imageCar} />
                        <span className={style.count}>{isCount}</span>
                    </div>

                </div> 

                <div className={style.containerSearch}>

                    <input 
                        className={style.inputSearch}
                        type="text" 
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleInputSearch} 

                    />

                    <div className={style.containerImageSearch}>
                        <img src={imageSearch}/>
                    </div>
            
                </div>
            </div>
        </header>
    )
}