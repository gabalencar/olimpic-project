import {useState, useEffect} from 'react';
import CardAtleta from '../../components/CardAtleta';
import footbal from '../../services/footbal';
import './index.css'
import NavBar from '../../components/NavBar';
import { containsValue } from '../../utils/strings';
import SearchComponent from '../../components/SearchComponent';

interface Player {
    id: number;
    name: string;
    image: string;
}

export default function Home() {
    const [athletes, setAthletes] = useState<Player[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [favorites, setFavorites] = useState<Record<string, boolean>>({});
    const [filterFavorites, setFilterFavorites] = useState(false);

    function onSearch(term: string) {
        setSearchTerm(term);
    }

    useEffect(() => {
       async function getData() {
            const response = await footbal.getAllPlayersCache();
            const playersData = response.data;

            const players = playersData.response.map((playerData: { player: { id: number; name: string; photo: string; }; }) => ({
                id: playerData.player.id,
                name: playerData.player.name,
                image: playerData.player.photo,
            }));

            setAthletes(players);
       }

       getData();
    }, []);

    const filteredAthletes = athletes.filter(player => {
        const isFavorite = favorites[player.name] || false;
        const matchesSearch = containsValue(player.name, searchTerm);

        return (filterFavorites ? isFavorite : true) && (searchTerm ? matchesSearch : true);
    });

    return (
        <>
            <NavBar setFilterFavorites={setFilterFavorites}/>
            <SearchComponent onSearch={onSearch}/>
            <div className="Home">
                <div className="AthletesContent">
                    {filteredAthletes.map(player => (
                        <CardAtleta 
                            favorites={favorites}
                            setFavorites={setFavorites}
                            favorite={favorites[player.name] || false}
                            key={player.id}
                            name={player.name}
                            image={player.image}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}