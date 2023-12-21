import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SideBar from "./SideBar";
import ff from "../public/NV BoookStore-1.png";

const NavBar = ({
                  logout,
                  user,
                  cart,
                  addToCart,
                  removeFromCart,
                  clearCart,
                  subTotal,
                }) => {
  const [search, setSearch] = useState("");

  return (
      <div className="flex justify-between flex-col items-center md:flex-row md:justify-start py-1 sticky top-0 z-10 bg-white dark:bg-gray-900 dark:shadow-orange-500">
        <div className="mx-5 mt-2">
          <Link href={"/"}>
            <a>
              <Image src={ff} alt="" width={160} height={18} />
            </a>
          </Link>
        </div>
        <div className="nav ml-5">
          <ul className="flex items-center space-x-4 font-bold md:text-base dark:text-orange-100">
            {[
              { href: "/all", label: "All" },
              { href: "/cpp", label: "Science" },
              { href: "/java", label: "Tech" },
              { href: "/python", label: "Selfgrowth" },
              { href: "/others", label: "Others" },
            ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <a>
                    <li>{link.label}</li>
                  </a>
                </Link>
            ))}
          </ul>
        </div>
        <div className="md:ml-6 lg:ml-14 flex lg:w-[35%] m-1">
          <form className="flex items-center w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                    aria-hidden="true"
                    className="w-5 h-4 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                  type="text"
                  id="search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    console.log(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  placeholder="Search"
              />
            </div>
          </form>
        </div>

        <SideBar
            logout={logout}
            user={user}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
            subTotal={subTotal}
        />
      </div>
  );
};

export default NavBar;
