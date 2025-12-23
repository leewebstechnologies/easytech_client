import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Topnav = () => {
  return (
    <div className="bg-slate-600">
      <div className="container flex items-center justify-between h-[44px]">
        <div className="left-block flex items-center">
          <div className="location flex items-center max-lg:hidden">
            <Icon.MapPinIcon size={14} className="text-white text-xl" />
            <span className="ml-2 caption1 text-white">
              67, Ferriby Road, Hessle, United Kingdom.
            </span>
          </div>
          <div className="mail lg:ml-7 flex items-center">
            <Icon.EnvelopeIcon className="text-white text-xl" />
            <span className="ml-2 caption1 text-white">
              supporteasytech@gmail.com
            </span>
          </div>
        </div>
        <div className="right-block flex items-center gap-5">
          <div className="line h-6 w-px bg-gray max-sm:hidden"></div>
          <div className="list-social flex items-center gap-2.5 max-sm:hidden">
            <Link
              className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
              href="https://web.facebook.com/ali.ajibade.946"
              target="_blank"
            >
              <i className="icon-facebook text-sm"></i>
            </Link>
            <Link
              className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
              href="https://www.linkedin.com/in/aliu-ajibade-a43210139"
              target="_blank"
            >
              <i className="icon-in text-sm"></i>
            </Link>
            <Link
              className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
              href="https://x.com/Aliu94992120"
              target="_blank"
            >
              <i className="icon-twitter text-[10px]"></i>
            </Link>
            <Link
              className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
              href="https://www.instagram.com/leewebs2020"
              target="_blank"
            >
              <i className="icon-insta text-[10px]"></i>
            </Link>
            <Link
              className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
              href="https://www.youtube.com/@UnlockArabic1"
              target="_blank"
            >
              <i className="icon-youtube text-[10px]"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Topnav