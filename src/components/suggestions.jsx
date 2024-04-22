import Image from 'next/image';

import { holiday } from '@/utils/holidayData';

import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HotelIcon from '@mui/icons-material/Hotel';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';

const Suggestions = () => {
    return (
        <>
            <div className='px-12 pt-10 h-max w-full bg-[#fafafa]'>
                <h2 className="pb-6 text-xl">Още предложения</h2>
                <div className="h-full flex flex-col md:flex-row w-full gap-5 justify-start items-start">
                    {holiday.map((h)=>(
                    <div key={h.id} id="card" className="h-[400px] w-auto flex flex-col justify-around text-gray-400 bg-white hover:scale-105 ease-in-out duration-200 cursor-pointer">
                        <div id="image" className="w-fill h-max">
                            <Image src={h.photo} alt="/" width={900} height={900} className="object-cover h-[250px]"/>
                        </div>
                        <div id="desc" className="text-sm text-center pt-2">{h.desc}</div>
                        <div id="price" className="p-4 flex items-center justify-around text-xs gap-2">
                            <div id="left" className="w-auto flex flex-col gap-2">
                                <span className="text-base text-red-600">{h.promoPrice}лв</span>
                                <span className="line-through">{h.oldPrice}лв</span>
                            </div>
                            <div id="right" className="w-auto flex flex-col gap-1 text-xs">
                                <span><HotelIcon fontSize='small'/> {h.nights} нощувки</span>
                                <span><FlightTakeoffIcon fontSize='small'/>{h.travelType}</span>
                                <span><ShareLocationIcon fontSize='small'/>{h.location}</span>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Suggestions;