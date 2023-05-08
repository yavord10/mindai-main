import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Logo from "@/public/images/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute w-full z-30 mt-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image className="w-20 h-20" src={Logo} alt="logo" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="https://mindaiapp.netlify.app/"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Presale
                </Link>
              </li>
              <li>
                <Link
                  href="https://famous-zabaione-503ef4.netlify.app/"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3 rounded-lg"
                >
                  Staking App
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
