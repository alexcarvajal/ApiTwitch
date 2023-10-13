
import TwitchLogo from '../assets/twitchLogo.svg'
import { Link } from 'react-router-dom'
const Header = ({ title }) => {
    return (
        <div >
            <div className={`flex flex-row bg-custom-Header h-24 relative text-white `}>
               <Link to='/' className='mt-4'> <img src={TwitchLogo} className='w-12 flex items-center mt-2 sm:w-16 absolute sm:absolute' alt="" /></Link>
               <h1 className="flex text-2xl font-bold items-center sm:text-3xl static sm:static mx-auto ">{title}</h1>
            </div>
        </div>
    )
}

export default Header



{/* <img src={TwitchLogo} className='w-16' alt="" />
            <h1 >{title}</h1> */}