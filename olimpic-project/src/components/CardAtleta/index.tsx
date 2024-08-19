interface CardAtletaProps {
    name: string;
    image: string;
}

export default function CardAtleta({name, image}: CardAtletaProps){
    return(
        <div>
            <img src={image} />
            <h3>
                {name}
            </h3>
            <button>
                favorito
            </button>
        </div>
    )
}