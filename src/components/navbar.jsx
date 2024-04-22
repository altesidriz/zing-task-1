import Image from "next/image";
import Link from "next/link";

const links = [
  { url: '/holidays', title: 'Почивки и екскурзии' },
  { url: '/hotels', title: 'Хотели' },
  { url: '/blog', title: 'Блог' },
  { url: '/contact', title: 'Контакти' },
];

const Navbar = () => {

  return (
    <div className='py-2 h-full flex justify-around items-center '>
      {/* LOGO + BUTTON */}
      <div className="w-1/3 h-full pl-20 flex justify-center gap-10 items-center">
        <div className="">
          <button className="flex w-full h-full border-2 flex-col gap-1 items-center border-none">
            <div className="w-8 h-[3px] bg-black rounded"></div>
            <div className="w-8 h-[3px] bg-black rounded"></div>
            <div className="w-8 h-[3px] bg-black rounded"></div>
          </button>
        </div>
        <div className="">
        <Link href="/">
          <Image src="/logo.png" alt="" width={100} height={50} />
        </Link>
        </div>
      </div>
      {/* MENU LIST */}
      <div className="pr-24 w-full h-full flex justify-end items-center gap-10 text-sm">
      {links.map((link) => (
          <Link className="h-full rounded hover:text-red-600" href={link.url} key={link.title}>{link.title}</Link>
        ))}
      </div>
    </div>
  );
};
export default Navbar;