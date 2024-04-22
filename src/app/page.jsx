'use client';

import { useRef } from 'react';
import Image from 'next/legacy/image';

import Banner from '@/components/banner';
import Gallery from '@/components/gallery';
import Suggestions from '@/components/suggestions';
import Partners from '@/components/partners';
import { singers } from '@/utils/singerData';
import { images } from '@/utils/currentDestImages';


import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Schedule from '@/components/schedule';

const Homepage = () => {
    const slideLeft = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    return (
        <>
            <Banner />
            <div className="relative pb-30 pt-5 px-10 flex flex-row gap-36 content-center justify-center md:pt-20">
                {/* LEFT-CONTENT */}
                <div className="left-content md:w-3/5">
                    {/* TEXT CONTAINER */}
                    <div className="px-3 pt-4 text-2xl leading-8">
                        <h2>За събитието</h2>
                        <p className="text-sm py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis perferendis sed doloribus delectus
                            repellat soluta dicta aperiam cumque! Ipsum similique labore dolores inventore modi aperiam? Officia optio
                            dolorum aspernatur incidunt sint? Saepe voluptates quaerat obcaecati doloribus impedit dignissimos
                            repellendus quae, eveniet recusandae dolores molestiae veritatis debitis! Dignissimos, odit ipsum!</p>
                        <p className="text-sm py-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, error? Fuga inventore maxime quasi
                            laboriosam dolorum facilis porro numquam voluptatem?</p>
                        <p className="text-sm py-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo placeat numquam molestias dolor, eos quidem
                            soluta dicta similique ullam. Perspiciatis delectus fugiat quis, error aut repellat ipsa id exercitationem
                            inventore dolor. Esse facilis quis, et placeat quos dolore temporibus voluptates.</p>
                    </div>
                    {/* GALLERY */}
                    <Gallery />
                    {/* TABLE */}
                    <div className="w-full pl-2 flex flex-row gap-3">
                        {/* first column */}
                        <div className="w-2/3 flex flex-col gap-2 text-sm">
                            <div className="bg-gray-400 w-full pl-5 text-gray-600">Настаняване</div>
                            <div className="pl-5">1 човек двойна стая</div>
                            <div className="pl-5">1 човек двойна стая</div>
                            <div className="pl-5">1 човек двойна стая</div>
                            <div className="pl-5">1 човек двойна стая</div>
                        </div>
                        {/* second column */}
                        <div className="w-1/3 flex flex-col gap-2 text-sm">
                            <div className="bg-gray-400 w-full pl-5 text-gray-600">Цена</div>
                            <div className="pl-5">1254лв</div>
                            <div className="pl-5">1254лв</div>
                            <div className="pl-5">1254лв</div>
                            <div className="pl-5">1254лв</div>
                        </div>
                    </div>
                    {/* SINGERS */}
                    <div className="overflow-scroll hide-scrollbar md:w-min h-min pt-16 pl-4 flex gap-2">
                        {singers.map((singer) => (
                            <div key={singer.name} className="flex flex-col items-center text-sm gap-1">
                                <div className="relative w-32 h-32 border">
                                    <Image src={singer.url} alt="eminem" layout="fill" className="object-cover" />
                                </div>
                                <span>{singer.name}</span>
                            </div>
                        ))}
                    </div>
                    {/* HOTELS */}
                    <div id="hotel" className="ml-4 pl-2 py-5 leading-10 w-full flex flex-col border-b-2 border-b-gray-300">
                        <h2 className="text-xl pb-4">Хотели</h2>
                        <div className="flex gap-4 pb-4">
                            <ApartmentIcon className="text-red-600"></ApartmentIcon>
                            <span className="text-lg font-bold">Grand Hotel*****</span>
                        </div>
                        <p className=" text-sm pb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam aperiam reiciendis ipsum quo soluta necessitatibus sed magnam expedita! Ea distinctio rem quod modi velit laudantium!</p>
                        <p className=" text-sm pb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam aperiam reiciendis ipsum quo soluta necessitatibus sed magnam expedita! Ea distinctio rem quod modi velit laudantium!</p>
                        <div className="relative h-1/2 flex items-center">
                            <NavigateBeforeIcon className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideLeft}></NavigateBeforeIcon>
                            <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth hide-scrollbar">
                                {images.map((img,index)=>(
                                <div key={index} className="p-2  w-[220px] inline-block cursor-pointer hover:scale-105 ease-in-out duration-200">
                                    <Image src={img} width={500} height={500} layout="responsive" alt="/" className="object-cover" />
                                </div>
                                ))}
                            </div>
                            <NavigateNextIcon className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideRight}></NavigateNextIcon>
                        </div>
                    </div>
                    {/* CUSTOMER REVIEWS */}
                    <div className="ml-4 pb-10 flex flex-col w-full h-max gap-5">
                        <h2 className="text-xl pt-8">Отзиви от клиенти</h2>
                        <div id="card-review" className="flex flex-row items-center justify-around gap-2 text-sm overflow-scroll hide-scrollbar">
                        {/* This part can be reviewed as a componenet also*/}
                            <div id="card" className="bg-gray-100 p-8 pt-4 rounded-lg text-sm">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eaque. Cumque hic nostrum amet, animi provident fugiat dolor reprehenderit unde?</p>
                            </div>
                        {/* This part can be reviewed as a componenet also*/}
                            <div id="card" className="bg-gray-100 p-8 pt-4 rounded-lg">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eaque. Cumque hic nostrum amet, animi provident fugiat dolor reprehenderit unde?</p>
                            </div>
                            <div id="card" className="bg-gray-100 p-8 pt-4 rounded-lg">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eaque. Cumque hic nostrum amet, animi provident fugiat dolor reprehenderit unde?</p>
                            </div>
                        </div>
                    </div>
                    {/* MORE SUGGESTIONS */}
                </div>
                {/* RIGHT CONTENT */}
                <div className="right-content hidden md:block w-2/4">
                    <Schedule />
                </div>
            </div>
            <Suggestions />
            <Partners />
        </>
    );
};

export default Homepage;
