
import Header from "./Header";
function Busqueda({ searchQuery, setSearchQuery, handleSearch, boxArtUrl }) {
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se refresque
        handleSearch(); // Llama a la función de búsqueda
    };
    return (
        <div className="flex flex-col h-screen bg-custom-Bg">
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
                <button onClick={handleSearch}
                    className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                >Buscar</button>
            </form>
            {boxArtUrl && <img src={boxArtUrl} className="mt-10 w-80" alt="Imagen del juego" />}
            </div>
        </div>
    );
}

export default Busqueda