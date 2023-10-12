import { Link } from "react-router-dom"
import Header from "../components/Header"
const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-custom-Bg">
      <Header title="Twitch" />
      <div className="flex flex-col items-center gap-20 mt-20 flex-grow">
        <Link to="/top10" className="text-6xl text-white">Top 10</Link>
        <Link to="/search" className="text-6xl text-white ">Buscar</Link>
      </div>
    </div>
  )
}

export default Home