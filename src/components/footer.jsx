import Image from "next/image";
import Link from "next/link";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div className="h-min w-full pt-4 flex flex-col bg-[#262626]">
            {/* SEARCH BAR */}
            <div className="h-1/3 p-2 border-b-2 border-b-gray-200">
                <div className="flex flex-col items-center gap-10 justify-around md:flex-row text-white">
                    <div className="max-w-xs font-bold text-lg">
                        <p>Отстъпки и специални предложения налични само на имейл</p>
                    </div>
                    <div className="w-1/2 flex flex-col gap-3">
                        <div className="flex">
                            <input type="email" className=" hidden md:inline-block h-10 w-2/3 pl-3 text-sm text-black font-light focus:outline-none" placeholder="Въведете вашия имейл..." />
                            <button className="bg-red-700 w-max p-5 md:h-10 md:w-1/3 md:p-0 hover:bg-red-500">Абонирай се</button>
                        </div>
                        <p className="text-xs font-light">Всеки месец ще получаваш първи най-добрите ни оферти.</p>
                    </div>
                </div>
            </div>
            {/* CONTACTS */}
            <div className="flex flex-col items-center md:flex-row gap-10 p-6 justify-center text-white">
                {/* LOGO COLUMN */}
                <div className="flex flex-col gap-4 items-center">
                    <Image src="/logo.png" alt="logo" width={100} height={50} />
                    <div className=" w-1/2 flex gap-2 text-[8px]">
                        <Image src="/license.png" alt="license" width={50} height={50} className="object-contain" />
                        <span>Лиценз, удостоверение за регистрация № 05236</span>
                    </div>
                    <div className=" w-1/2 flex flex-row gap-5 text-[8px]">
                        <Image src="/insurance.png" alt="license" width={50} height={50} className="object-contain" />
                        <span>Застраховка &quot;Отговорност на туроператора&quot;</span>
                    </div>
                    <span className="text-[10px] w-1/2">All rights reserved &copy;2020 Mistral</span>
                </div>
                {/* CONTACT COLUMN */}
                <div className="w-1/5 flex flex-col text-xs gap-3 font-thin">
                    <h6 className="text-sm font-normal">Контакти</h6>
                    <p>1111 София, България, ул. Христо Белчев 34</p>
                    +359 884 47 30 34 // мобилен
                    <p>+359 2 980 44 59 // офис</p>
                    <p>+359 2 980 41 05 // факс</p>
                    <p>mistral@mistralbg.com</p>
                    <p className="w-3/4">Понеделник - Петък 10.00ч. - 18.00ч.</p>
                </div>
                {/* Бързи Връзки */}
                <div className="w-1/5 flex flex-col gap-8 font-thin">
                    <h6 className="text-sm font-normal">Бързи връзки</h6>
                    <div className="flex flex-row gap-2 items-end">
                        <div className="flex flex-col w-1/2 gap-6 text-xs items-start">
                            <Link href="#" className="hover:text-gray-300">За нас</Link>
                            <Link href="#" className="hover:text-gray-300">Документи</Link>
                            <Link href="#" className="hover:text-gray-300">Начин на плащане</Link>
                        </div>
                        <div className="flex flex-col w-1/2 gap-6 text-xs items-start">
                            <Link href="#" className="hover:text-gray-300">Общи условия</Link>
                            <Link href="#" className="hover:text-gray-300">Лични данни</Link>
                            <Link href="#" className="hover:text-gray-300">Контакти</Link>
                        </div>
                    </div>
                </div>
                {/* SOCIAL COL */}
                <div className="w-1/5 flex flex-col gap-12">
                    <Link href="#" className="hover:hover:scale-105 ease-in-out duration-200">
                        <div className="flex flex-col gap-2 items-center text-sm font-light">
                            <p>120к ни харесват в</p>
                            <FacebookIcon fontSize="large"/>
                        </div>
                    </Link>
                    <Link href="#" className="hover:hover:scale-105 ease-in-out duration-200">
                        <div className="flex flex-col gap-2 items-center text-sm font-light">
                            <p>60к ни харесват в</p>
                            <InstagramIcon fontSize="large"/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Footer;