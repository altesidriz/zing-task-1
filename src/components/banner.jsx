import Image from "next/legacy/image";

import HotelIcon from '@mui/icons-material/Hotel';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Banner = () => {
    return (
        <div className="h-96 relative flex flex-row content-center justify-center bg-black">
            <div className="h-96 bg-black">
                <Image src="/licensed-image.jpg" alt="dubai" layout='fill' objectFit='content' className="blur-sm"/>
            </div>
            <div className="flex flex-col w-5/6 absolute top-10 left-50 items-center gap-8 text-white text-2xl">
                <div className="text-center leading-none text-3xl">
                    <h1 className="px-0 pb-10">Арабска приказка в Йордания</h1>
                    <span className="border-2 border-white text-sm px-1 py-3">11-15 Март</span>
                </div>
                <div className="hidden w-1/2 md:flex flex-row align-middle justify-around">
                    <div className="flex flex-col items-center">
                        <span className="text-2xl">11</span>
                        <span className="text-sm">дни</span>
                    </div>
                    <div className="w-0.5 bg-white rounded"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl">14</span>
                        <span className="text-sm">часа</span>
                    </div>
                    <div className="w-0.5 bg-white rounded"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl">55</span>
                        <span className="text-sm">минути</span>
                    </div>
                </div>
                <div className="flex flex-col items-center my-0">
                    <span className="bg-red-600 p-4 rounded-3xl text-lg">Резервирайте сега</span>
                    <span className="text-sm m-0">от 1149,00лв</span>
                </div>
                <div className="hidden w-5/6 my-0 md:flex flex-row justify-center gap-5 items-baseline">
                    <div className="bg-red-600 px-6 py-2 flex flex-col justify-center items-center font-light text-xs">
                        <HotelIcon />
                        <span>8 нощувки</span>
                    </div>
                    <div className="bg-red-600 px-6 py-2 flex flex-col justify-center items-center font-light text-xs">
                        <AirplanemodeActiveIcon />
                        <span>Самолет</span>
                    </div>
                    <div className="bg-red-600 px-6 py-2 flex flex-col justify-center items-center font-light text-xs">
                        <LocationOnIcon />
                        <span>Австрия</span>
                    </div>
                    <div className="bg-red-600 px-6 py-2 flex flex-col justify-center items-center font-light text-xs">
                        <CalendarMonthIcon />
                        <span>11-15 Март</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;