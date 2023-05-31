"use client";

import { useState } from "react";

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true);

  return (
    <>
      {bannerOpen && (
        <div
          className="fixed bottom-0 right-0 md:bottom-8 md:right-12 md:w-auto z-60"
          style={{ bottom: "100px", right: "5rem" }}
        >
          <div className="bg-slate-800 text-slate-50 text-sm p-3 shadow-lg flex rounded-lg">
            <div className="text-slate-500 inline-flex">
              <a
                className="font-medium hover:underline text-emerald-400"
                href="https://presale.mindaimusic.com/"
                target="_blank"
                rel="noreferrer"
              >
                Presale coming soon!
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
