import Image from 'next/image';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HotelIcon from '@mui/icons-material/Hotel';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';

const Suggestions = () => {
    return (
        <>
            <div className='pl-4 h-[480px] w-full'>
                <h2 className="pb-6 text-xl">Още предложения</h2>
                <div className="pl-10 flex flex-row gap-5 justify-start items-start">
                    <div id="card" className="flex flex-col w-1/4 text-gray-400 bg-white">
                        <div id="image" className="w-fill h-fill">
                            <Image src='/vacation1.png' alt="/" width={300} height={300} className="object-cover"/>
                        </div>
                        <div id="desc" className="text-sm text-center pt-2">Ски в Алпите в курорта Иглс, Австрия хотел Bon Alpina 3*</div>
                        <div id="price" className="p-4 flex items-center justify-around text-xs gap-2">
                            <div id="left" className="flex flex-col gap-2">
                                <span className="text-base text-red-600">336лв</span>
                                <span className="line-through">689лв</span>
                            </div>
                            <div id="right" className="flex flex-col gap-1 text-xs">
                                <span><HotelIcon fontSize='small'/> 8 нощувки</span>
                                <span><FlightTakeoffIcon fontSize='small'/>Самолет</span>
                                <span><ShareLocationIcon fontSize='small'/>Австрия</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Suggestions;