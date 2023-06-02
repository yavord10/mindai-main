import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faMedium,
  faTelegram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header className="absolute w-full z-30 mt-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="MindAI">
              <Image className="w-24" src={Logo} alt="logo" />
            </Link>
          </div>

          <a href="https://t.me/mindaimusic">
            <FontAwesomeIcon
              icon={faTelegram}
              className="m-2 w-8 h-8 text-purple-600"
            />
          </a>
          <a href="https://twitter.com/MindAIMusic">
            <FontAwesomeIcon
              icon={faTwitterSquare}
              className="m-2 w-8 h-8 text-purple-600"
            />
          </a>
          <a href="https://mindaimusic.medium.com/">
            <FontAwesomeIcon
              icon={faMedium}
              className="m-2 w-8 h-8 text-purple-600"
            />
          </a>
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="https://play.mindaimusic.com/"
                  className="font-medium text-emerald-400 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Playground
                </Link>
              </li>
              <li>
                <Link
                  href="https://presale.mindaimusic.com/"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Presale
                </Link>
              </li>
              <li>
                <Link
                  href="https://litepaper.mindaimusic.com"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Litepaper
                </Link>
              </li>
              <li>
                <Link
                  href="https://stake.mindaimusic.com/"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3 rounded-lg"
                >
                  Staking App
                </Link>
              </li>
              <li>
                <Link
                  href="https://mint.mindaimusic.com/"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3 rounded-lg"
                >
                  NFT Minting App
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
