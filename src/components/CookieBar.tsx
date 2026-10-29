"use client";

import { useEffect, useState } from "react";

const KEY = "pth-cookie-ok";

export function CookieBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      setShow(!localStorage.getItem(KEY));
    } catch {
      setShow(true);
    }
  }, []);
  if (!show) return null;
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[11.5rem] z-[60] flex justify-center px-3 md:bottom-8">
      <div className="pointer-events-auto w-full max-w-md rounded-2xl border bg-white p-3 text-center text-xs text-stone-700 shadow-xl">
        <p>
          This site stores your progress and settings on this device only. It shows no ads and uses no analytics. See our{" "}
          <a className="text-emerald-800 underline" href="/privacy">
            Privacy Policy
          </a>
          .
        </p>
        <button
          className="mt-2 rounded-full bg-emerald-800 px-4 py-1.5 text-white"
          onClick={() => {
            try {
              localStorage.setItem(KEY, "1");
            } catch {
              /* ignore */
            }
            setShow(false);
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}
