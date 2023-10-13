
import PropTypes from 'prop-types';
import Header from './Header';
const Top10 = ({ data, title }) => {
    return (
        <>
            <Header title="Top 10 de Stream en Twitch" />
            <div className="flex items-center bg-custom-Bg justify-center h-[20]">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {data.slice(0, 10).map(stream => (
                        <li key={stream.id} 
                        className="group border-color-black p-4 shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105 hover:text-customTextHover ">
                            <img src={stream.box_art_url.replace('{width}x{height}', '188x250')} alt={stream.name} className="mr-4" />
                            <span className="text-xl text-white hover:text-customTextHover group-hover:text-customTextHover">{stream.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

Top10.propTypes = {
    data: PropTypes.array.isRequired
};

export default Top10;



