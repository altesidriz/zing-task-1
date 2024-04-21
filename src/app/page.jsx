'use client';
import { useRef } from "react";
import Image from "next/legacy/image";

import Banner from "@/components/banner";
import Suggestions from "@/components/suggestions";
import Partners from "@/components/partners";


import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Footer from "@/components/footer";

const images = [
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDI%3D',
    'https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1459787915554-b34915863013?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1628859017536-c2f1d69f3c84?q=80&w=2137&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

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
            <div className="py-5 flex flex-row content-center justify-center">
                {/* LEFT-CONTENT */}
                <div className="left-content w-2/4">
                    {/* TEXT CONTAINER */}
                    <div className="px-3 text-2xl leading-8">
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
                    <div className="px-3 h-96 size-full flex flex-col gap-3 justify-center items-center">
                        <div className="relative grid grid-cols-[2fr_repeat(2,1fr)] grid-rows-[1fr] gap-x-2.5 gap-y-2.5">
                            <div className="relative bg-white h-32 w-full ">
                                <Image src="/licensed-image.jpg" alt="" layout="fill" className="object-cover" />
                            </div>
                            <div className="relative bg-white h-32 w-32">
                                <Image src="/licensed-image.jpg" alt="" layout="fill" className="object-cover" />
                            </div>
                            <div className="relative bg-white h-32 w-32">
                                <Image src="/licensed-image.jpg" alt="" layout="fill" className="object-cover" />
                            </div>
                        </div>
                        <div className="relative grid grid-cols-[repeat(2,1fr)_2fr] grid-rows-[1fr] gap-x-2.5 gap-y-2.5">
                            <div className="relative bg-white h-32 w-32">
                                <Image src="/licensed-image.jpg" alt="" layout="fill" className="object-cover" />
                            </div>
                            <div className="relative bg-white h-32 w-32">
                                <Image src="/licensed-image.jpg" alt="" layout="fill" className="object-cover" />
                            </div>
                            <div className="relative bg-white h-32 w-full">
                                <Image src="/licensed-image.jpg" alt="" layout="fill" className="object-cover" />
                            </div>
                        </div>
                    </div>
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
                    <div className="w-full pt-16 pl-4 flex gap-2">
                        <div className="flex flex-col items-center text-sm gap-1">
                            <div className="relative w-32 h-32 border">
                                <Image src="/Eminem.jpeg" alt="eminem" layout="fill" className="object-cover" />
                            </div>
                            <span>Eminem</span>
                        </div>
                    </div>
                    {/* HOTELS */}
                    <div id="hotel" className="ml-4 pl-2 pt-10 leading-10 w-full flex flex-col border-b-2 border-b-gray-300">
                        <h2 className="text-xl pb-4">Хотели</h2>
                        <div className="flex gap-4 pb-4">
                            <ApartmentIcon className="text-red-600"></ApartmentIcon>
                            <span className="text-lg font-bold">Grand Hotel*****</span>
                        </div>
                        <p className=" text-sm pb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam aperiam reiciendis ipsum quo soluta necessitatibus sed magnam expedita! Ea distinctio rem quod modi velit laudantium!</p>
                        <p className=" text-sm pb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam aperiam reiciendis ipsum quo soluta necessitatibus sed magnam expedita! Ea distinctio rem quod modi velit laudantium!</p>
                        <div className="relative h-40 flex items-center">
                            <NavigateBeforeIcon className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideLeft}></NavigateBeforeIcon>
                            <div id="slider" className="w-full h-fit overflow-x-scroll scroll whitespace-nowrap scroll-smooth hide-scrollbar">
                                <div className="p-2 w-[220px] inline-block cursor-pointer hover:scale-105 ease-in-out duration-200">
                                    <Image src="/licensed-image.jpg" width={500} height={500} layout="responsive" alt="/" className="object-contain" />
                                </div>
                                <div className="p-2 w-[220px] inline-block cursor-pointer hover:scale-105 ease-in-out duration-200">
                                    <Image src="/licensed-image.jpg" width={500} height={500} layout="responsive" alt="/" className="object-contain" />
                                </div>
                                <div className="p-2 w-[220px] inline-block cursor-pointer hover:scale-105 ease-in-out duration-200">
                                    <Image src="/licensed-image.jpg" width={500} height={500} layout="responsive" alt="/" className="object-contain" />
                                </div>
                                <div className="p-2 w-[220px] inline-block cursor-pointer hover:scale-105 ease-in-out duration-200">
                                    <Image src="/licensed-image.jpg" width={500} height={500} layout="responsive" alt="/" className="object-contain" />
                                </div>
                                <div className="p-2 w-[220px] inline-block cursor-pointer hover:scale-105 ease-in-out duration-200">
                                    <Image src="/licensed-image.jpg" width={500} height={500} layout="responsive" alt="/" className="object-contain" />
                                </div>
                            </div>
                            <NavigateNextIcon className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideRight}></NavigateNextIcon>
                        </div>
                    </div>
                    {/* CUSTOMER REVIEWS */}
                    <div className="ml-4 flex flex-col w-full h-full gap-5">
                        <h2 className="text-lg pt-4">Отзиви от клиенти</h2>
                        <div id="card-review" className="flex flex-row items-center justify-around gap-2  text-sm">
                            <div id="card" className="bg-gray-100 p-2 rounded-lg">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eaque. Cumque hic nostrum amet, animi provident fugiat dolor reprehenderit unde?</p>
                            </div>
                            <div id="card" className="bg-gray-100 p-2 rounded-lg">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eaque. Cumque hic nostrum amet, animi provident fugiat dolor reprehenderit unde?</p>
                            </div>
                            <div id="card" className="bg-gray-100 p-2 rounded-lg">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eaque. Cumque hic nostrum amet, animi provident fugiat dolor reprehenderit unde?</p>
                            </div>
                        </div>
                    </div>
                    {/* MORE SUGGESTIONS */}
                </div>
                {/* RIGHT CONTENT */}
                <div className="right-content w-2/4">
                </div>
            </div>
            <Suggestions />
            <Partners />
            <Footer />
        </>
    );
};

export default Homepage;
