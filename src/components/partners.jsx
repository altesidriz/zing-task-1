import Image from "next/image";

const Partners = () => {
    return (
        <div className="hidden pl-12 pt-10 h-max md:flex flex-col gap-4 bg-[#fafafa]">
            <h2 className="text-xl">Партньори</h2>
            <p className="text-xs text-gray-400 w-full md:w-1/3">Our customers accomplish amazing things every day. They work to find cure to cancer, travel to spaces.</p>
            <div className="self-center w-full h-max">
                <Image src="/logos.png" alt="/" width={900} height={900} className="object-cover"/>
            </div>
        </div>
    );
};
export default Partners;