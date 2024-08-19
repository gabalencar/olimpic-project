import {useState, useEffect} from 'react';
import CardAtleta from '../../components/CardAtleta';
import footbal from '../../services/footbal';

interface Player {
    id: number;
    name: string;
    image: string;
}

export default function Home(){
    const [athlets, setAthlets] = useState<Array<Player>>([]);

    useEffect(() => {
       async function getData(){
            const response = await footbal.getAllPlayersFromATeam(6, 2024);
            const playersData = response.data;

            playersData.response.forEach((playerData: { player: { id: number; name: string; photo: string; }; }) => {
                const player = {
                    id: playerData.player.id,
                    name: playerData.player.name,
                    image: playerData.player.photo,
                };

                setAthlets(athlets => [...athlets, player])
            });
    
       }

       getData();
    }, []);

    return(
        <div>
           {
                athlets.map(player => <CardAtleta key={player.id} name={player.name} image={player.image} />)
           }
        </div>
    )
}