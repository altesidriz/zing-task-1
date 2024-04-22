import Image from "next/image";

const Gallery = () => {
  return (
    <div className="px-3 h-96 size-full flex flex-col gap-3 justify-center items-center">
                        <div className="relative grid grid-cols-[2fr_repeat(2,1fr)] grid-rows-[1fr] gap-x-2.5 gap-y-2.5">
                            <div className="relative bg-white h-32 w-full ">
                                <Image src='/licensed-image.jpg' alt="" layout="fill" className="object-cover" />
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
  );
};
export default Gallery;