import { useState } from 'react';
import "./index.css"

interface SearchBarProps {
    onSearch(term: string): void;
}

export default function SearchComponet({ onSearch }: SearchBarProps){
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: any) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <div className="searchBar">
            <input
                type="text"
                placeholder="Digite sua busca..."
                className="searchInput"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <button className="searchButton" onClick={handleSearch}>
                Buscar
            </button>
        </div>
    );
}