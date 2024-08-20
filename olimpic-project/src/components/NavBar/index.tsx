import "./index.css"

interface NavBarProps {
    setFilterFavorites(filter: boolean): void
}

export default function NavBar({setFilterFavorites}: NavBarProps){
    return(
        <nav className={"navbar"}>
        <div className={"logo"}>
            React Project
        </div>
        <ul className={"menu"}>
            <li className={"menuItem"} onClick={() => setFilterFavorites(false)}>Página inicial</li>
            <li className={"menuItem"} onClick={() => setFilterFavorites(true)}>Favoritos</li>
        </ul>
    </nav>
    )
}