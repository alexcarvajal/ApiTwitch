import { useEffect } from "react";
import Header from "./Header";
function Busqueda({ searchQuery, setSearchQuery, handleSearch, searchResults, boxArtUrl }) {
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se refresque
    };

    useEffect(() => {
        handleSearch();  // Llama a handleSearch cuando el componente se monta para obtener todos los juegos
    }, [handleSearch]);
    // Filtrar los juegos basados en el valor de searchQuery
    const filteredResults = searchResults.filter(game =>
        game.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
     
        <div className="flex flex-col min-h-screen bg-custom-Bg">
            <Header title="Buscar Juego" />
            <div className="flex flex-col items-center mt-10">
                <form onSubmit={handleSubmit} className="flex flex-row items-center space-x-6">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Buscar juego..."
                        className="p-2 border rounded-md focus:outline-none focus:border-indigo-500 w-64"
                    />
                </form>
                {boxArtUrl && <img src={boxArtUrl} className="mt-10 w-80" alt="Imagen del juego" />}

                <div className="grid grid-cols-5 gap-4 w-full max-w-6xl h-full">
                    {filteredResults.map(game => (
                        <div key={game.id} className="text-center mt-10 text-xl text-bold text-white hover:shadow-lg transform transition-transform duration-300 hover:scale-105 hover:text-customTextHover">
                            <h2>{game.name}</h2>
                            <img src={game.box_art_url.replace('{width}x{height}', '188x250')} alt={`Imagen de ${game.name}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
);
}

export default Busqueda