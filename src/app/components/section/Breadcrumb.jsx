import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

const Breadcrumb = ({ link, img, title, desc }) => {
  return (
    <div className="relative w-full lg:h-[280px] sm:h-[300px] h-[320px]">
      <Image src={img} alt="banner" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container relative z-10 h-full flex items-center">
        <div className="absolute top-8 left-4 flex items-center gap-1 rounded-full bg-slate-600/80 px-4 py-2">
          <Link href="/" className="caption1 text-white hover:underline">
            Home
          </Link>
          <Icon.CaretDoubleRightIcon className="text-white" />
          <span className="caption1 text-white">{link}</span>
        </div>

        <div className="xl:w-1/2 md:w-3/5">
          <h1 className="heading3 text-white">{title}</h1>
          <p className="mt-4 text-white font-normal">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
