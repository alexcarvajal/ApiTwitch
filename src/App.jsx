import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Top10 from './components/Top10'
import Busqueda from './components/Busqueda';

function App() {
  const [topGames, setTopGames] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [boxArtUrl, setBoxArtUrl] = useState('');
  const CLIENT_ID = 'hawbqdml4ov6dnfr1mnjt2p19bd824';
  const ACCESS_TOKEN = 'lxvnc4rfsq6o3x9c0vfe6bkwkxad4e';
  const TWITCH_API_ENDPOINT = 'https://api.twitch.tv/helix/games/top';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(TWITCH_API_ENDPOINT, {
          headers: {
            'Client-ID': CLIENT_ID,
            'Authorization': `Bearer ${ACCESS_TOKEN}`
          }
        });

        setTopGames(response.data.data);
      } catch (error) {
        console.error('Error fetching Twitch data:', error);
      }
    };
    fetchData();
  }, []);
  const handleSearch = async () => {
    const SEARCH_API_ENDPOINT = `https://api.twitch.tv/helix/games/top?first=100&name=${searchQuery}`;
    try {
      const response = await axios.get(SEARCH_API_ENDPOINT, {
        headers: {
          'Client-ID': CLIENT_ID,
          'Authorization': `Bearer ${ACCESS_TOKEN}`
        }
      });
      setSearchResults(response.data.data);
 /*      if (response.data.data.length > 0) {
        setBoxArtUrl(response.data.data[0].box_art_url.replace('{width}x{height}', '188x250'))
      } else {
        setBoxArtUrl(''); // Resetear la imagen si no hay resultados
        console.log('No se encontraron resultados para la búsqueda.');
      } */
    }
  
    catch (error) {
      console.error('Error fetching Twitch data:', error);
    }
  };


  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/top10" element={<Top10 data={topGames} />} />
        <Route path="/search" element={<Busqueda searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} searchResults={searchResults} boxArtUrl={boxArtUrl} />} />
      </Routes>
    </Router>
  )
}

export default App
