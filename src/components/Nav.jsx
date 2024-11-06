"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NAV_LINKS } from "@/utils/helper";
import CommonButton from "./common/CommonButton";

const Nav = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        document.body.style.overflow = show ? "visible" : "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [show]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (window.innerWidth < 1024) {
      setShow(!show);
    }
  };

  return (
    <div className="mt-10">
      <div className="max-w-[1480px] mx-auto px-5 container">
        <div className="flex justify-between items-center">
          <div className="w-[215px] h-[65px]">
            <Link href="/" aria-label="nav-logo">
              <Image
                src="/assets/images/svg/logo.svg"
                alt="page-logo"
                width={215}
                height={65}
              />
            </Link>
          </div>
          <ul
            className={`flex items-center lg:gap-10 sm:gap-6 gap-4 max-lg:fixed max-lg:justify-center top-0 max-lg:-left-full max-lg:z-[90] max-lg:h-screen max-lg:flex-col max-lg:w-full max-lg:duration-300 max-lg:bg-white ${
              show ? "" : "!start-0"
            }`}
          >
            {NAV_LINKS.map((obj, index) => (
              <li key={index}>
                <Link
                  onClick={(e) => handleClick(e, obj.href.substring(1))}
                  href={obj.href}
                  className="text-rich-black text-lg font-normal font-clash leading-140 ease-in-out duration-300 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-0 hover:after:w-full after:h-[1px] hover:text-dark-orange after:bg-dark-orange after:transition-all after:duration-300"
                >
                  {obj.navItems}
                </Link>
              </li>
            ))}
                        <li className="sm:hidden">
              <CommonButton  className="uppercase">Conctact Us</CommonButton>
            </li>
          </ul>
          <div className="flex items-center justify-end">
       <CommonButton className="max-sm:hidden">Contact us</CommonButton>
          </div>
          <div className="flex items-center lg:gap-12 gap-6">
            <div
              className={`cursor-pointer relative z-[100] lg:hidden max-sm:scale-75 ${
                show ? "" : "cross"
              }`}
              onClick={() => setShow(!show)}
            >
              <span className="nav-toggle-items"></span>
              <span className="nav-toggle-items my-2"></span>
              <span className="nav-toggle-items"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
