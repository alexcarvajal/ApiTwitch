
import TwitchLogo from '../assets/twitchLogo.svg'
import { Link } from 'react-router-dom'
const Header = ({ title }) => {
    return (
        <div >
            <div className={`flex flex-row bg-custom-Header h-24 text-white `}>
               <Link to='/' className='mt-4'> <img src={TwitchLogo} className='w-16 fixed' alt="" /></Link>
                <h1 className="flex text-3xl font-bold items-center mx-auto ">{title}</h1>
            </div>
        </div>
    )
}

export default Header



{/* <img src={TwitchLogo} className='w-16' alt="" />
            <h1 >{title}</h1> */}