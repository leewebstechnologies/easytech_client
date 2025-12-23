"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();
  const [fixedHeader] = useState(false);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  return (
    <div className={`header-menu bg-white ${fixedHeader ? "fixed" : ""}`}>
      <div className="container flex items-center justify-between h-20">
        <Link className="menu-left-block" href="/">
          <Image
            src={"/images/logo.png"}
            width={2000}
            height={1000}
            alt="logo"
            priority={true}
            className="w-[149px] max-sm:w-[132px]"
          />
        </Link>
        <div className="menu-center-block h-full">
          <ul className="menu-nav flex items-center xl-gap-2 h-full">
            <li
              className={`nav-item h-full flex items-center justify-center home ${
                pathname === "/" ? "active" : ""
              }`}
            >
              <Link
                className="nav-link text-title flex items-center gap-1"
                href="/"
              >
                <span>Home</span>
              </Link>
            </li>
            <li
              className={`nav-item h-full flex items-center justify-center home ${
                pathname === "/about" ? "active" : ""
              }`}
            >
              <Link
                className="nav-link text-title flex items-center gap-1"
                href="/about"
              >
                <span>About Us</span>
              </Link>
            </li>
            <li
              className={`nav-item h-full flex items-center justify-center home ${
                pathname === "/services" ? "active" : ""
              }`}
            >
              <Link
                className="nav-link text-title flex items-center gap-1"
                href="/services"
              >
                <span>Our Services</span>
              </Link>
            </li>
            <li
              className={`nav-item h-full flex items-center justify-center home ${
                pathname === "/case" ? "active" : ""
              }`}
            >
              <Link
                className="nav-link text-title flex items-center gap-1"
                href="/case"
              >
                <span>Case Studies</span>
              </Link>
            </li>
            <li
              className={`nav-item h-full flex items-center justify-center home ${
                pathname === "/blog" ? "active" : ""
              }`}
            >
              <Link
                className="nav-link text-title flex items-center gap-1"
                href="/blog"
              >
                <span>Blog</span>
              </Link>
            </li>
            <li
              className={`nav-item h-full flex items-center justify-center home ${
                pathname === "/contact" ? "active" : ""
              }`}
            >
              <Link
                className="nav-link text-title flex items-center gap-1"
                href="/contact"
              >
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu-right-block flex items-center">
          <div className="icon-call">
            <i className="icon-phone-call text-4xl"></i>
          </div>
          <div className="text ml-3">
            <div className="text caption1">Free Consultancy</div>
            <div className="number text-button">01603 561735</div>
          </div>
          <div
            className="menu-hamburger block lg:hidden pointer ml-4"
            onClick={() => setOpenMenuMobile(!openMenuMobile)}
          >
            <Icon.ListIcon className="text-2xl" weight="bold" />
          </div>
        </div>
      </div>
      <div id="menu-mobile-block" className={` ${openMenuMobile && "open"} `}>
        <div className="menu-mobile-main">
          <div className="container">
            <ul className="menu-nav-mobile h-full pt-1 pb-1">
              <li className="nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 pointer">
                <Link
                  className="nav-link-mobile flex items-center justify-between"
                  href="/"
                >
                  <span className="body2 font-bold">Home</span>
                </Link>
              </li>
              <li className="nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 pointer">
                <Link
                  className="nav-link-mobile flex items-center justify-between"
                  href="/about"
                >
                  <span className="body2 font-bold">About Us</span>
                </Link>
              </li>
              <li className="nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 pointer">
                <Link
                  className="nav-link-mobile flex items-center justify-between"
                  href="/services"
                >
                  <span className="body2 font-bold">Services</span>
                </Link>
              </li>
              <li className="nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 pointer">
                <Link
                  className="nav-link-mobile flex items-center justify-between"
                  href="/services"
                >
                  <span className="body2 font-bold">Our Services</span>
                </Link>
              </li>
              <li className="nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 pointer">
                <Link
                  className="nav-link-mobile flex items-center justify-between"
                  href="/case-studies"
                >
                  <span className="body2 font-bold">Case Studies</span>
                </Link>
              </li>
              <li className="nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 pointer">
                <Link
                  className="nav-link-mobile flex items-center justify-between"
                  href="/blog"
                >
                  <span className="body2 font-bold">Blog</span>
                </Link>
              </li>
              <li className="nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 pointer">
                <Link
                  className="nav-link-mobile flex items-center justify-between"
                  href="/contact"
                >
                  <span className="body2 font-bold">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
