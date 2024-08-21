import { FaStar } from 'react-icons/fa'; // Importa o ícone de estrela
import './index.css'

interface CardAtletaProps {
    name: string;
    image: string;
    favorite?: boolean;
    favorites: Record<string, boolean>;
    setFavorites(favorites: Record<string, boolean>): void;
}


export default function CardAtleta({name, image, favorite = false, favorites, setFavorites}: CardAtletaProps){
    const toggleFavorite = () => {
        const newFavorites = { ...favorites };
        newFavorites[name] = !favorite;
        setFavorites(newFavorites);
    };

    return(
        <div className='cardContainer'>
            <img src={image} className='cardImage'/>
            <h3 className='cardName'>
                {name}
            </h3>
            <FaStar 
                className={`cardStar ${favorite ? 'favorite' : ''}`}
                onClick={toggleFavorite}
            />
        </div>
    )
}