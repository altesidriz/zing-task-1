import Image from "next/image";

const Partners = () => {
    return (
        <div className=" pl-10 pt-10 flex flex-col gap-4 bg-[#fafafa]">
            <h2 className="text-xl">Партньори</h2>
            <p className="text-xs text-gray-400 w-1/3">Our customers accomplish amazing things every day. They work to find cure to cancer, travel to spaces.</p>
            <div className="self-start">
                <Image src="/logos.png" alt="/" width={900} height={900} />
            </div>
        </div>
    );
};
export default Partners;