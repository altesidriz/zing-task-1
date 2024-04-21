import Image from "next/legacy/image";
import Link from "next/link";

const links = [
  { url: '/holidays', title: 'Почивки и екскурзии' },
  { url: '/hotels', title: 'Хотели' },
  { url: '/blog', title: 'Блог' },
  { url: '/contact', title: 'Контакти' },
];

const Navbar = () => {

  return (
    <div className='h-55 flex justify-around items-center '>
      {/* LOGO + BUTTON */}
      <div className="w-1/3 h-full flex justify-end items-center bg-blue-300">
        <div className="">
          <button className="w-5 h-8 flex-col justify-between">
            <div className="w-10 h-1 bg-black rounded"></div>
            <div className="w-10 h-1 bg-black rounded"></div>
            <div className="w-10 h-1 bg-black rounded"></div>
          </button>
        </div>
        <div className="">
        <Link href="/">
          <Image src="/logo.png" alt="" width={100} height={50} />
        </Link>
        </div>
      </div>
      {/* MENU LIST */}
      <div className="w-2/3 h-full flex justify-center items-center gap-x-5 bg-red-300">
      {links.map((link) => (
          <Link className="rounded p-1 text-xs" href={link.url} key={link.title}>{link.title}</Link>
        ))}
      </div>
    </div>
  );
};
export default Navbar;