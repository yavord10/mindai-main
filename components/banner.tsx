"use client";

import Image from "next/image";
import MindAvatar from "@/public/images/mindavatar.png";
import { useState } from "react";
import Link from "next/link";

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true);

  return (
    <>
      {bannerOpen && (
        <div
          className="fixed bottom-0 right-0 md:bottom-8 md:right-12 md:w-auto z-60"
          style={{ bottom: "100px", right: "6rem" }}
        >
          <div
            className="bg-slate-800 text-slate-50 text-sm p-3 shadow-lg flex justify-between rounded-lg"
            style={{ position: "relative", zIndex: "1" }}
          >
            <div className="text-slate-500 inline-flex">
              {/* <Link
                href="https://presale.mindaimusic.com/"
                className="font-medium text-emerald-400"
                rel="noreferrer"
              > */}
              Presale coming soon!
              {/* </Link> */}
            </div>
            <button
              className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-gray-700"
              onClick={() => setBannerOpen(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-4 h-4 shrink-0 fill-current"
                viewBox="0 0 16 16"
              >
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
          <Image
            width={200}
            height={200}
            className="fixed bottom-0 right-0"
            src={MindAvatar}
            alt="mindavatar"
            style={{ right: "-40px" }}
          />
        </div>
      )}
    </>
  );
}
