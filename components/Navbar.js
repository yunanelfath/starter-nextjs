import { useState } from "react";
import { useWindowSize } from "./../helper";
import { linkList } from "./../helper/const";

export const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const screenSize = useWindowSize();
  const screenMobile = screenSize.width <= 420;
  return (
    <nav className="flex items-center justify-between flex-wrap bg-brand-gray md:bg-brand-secondary py-4 px-4 md:px-24 md:fixed w-full z-10 top-0">
      
      <div className="block lg:hidden">
        <button
          onClick={() => setNavToggle(!navToggle)}
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-brand-primary border-brand-primary hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0 ${
          navToggle ? "" : "hidden"
        }`}
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          {linkList.map((val, i) => (
            <li className="mr-1" key={i}>
              {val.url ? (
                <a
                  className="inline-block py-2 px-4 text-brand-primary md:text-white no-underline"
                  href={val.url}
                >
                  {val.name}
                </a>
              ) : (
                <>
                  {!screenMobile && (
                    <>
                      <p className="inline-block px-4 text-white no-underline">
                        {val.name}
                      </p>
                      <p
                        className="text-xs text-white"
                        style={{
                          fontSize: "8px",
                          textAlign: "right",
                          lineHeight: 0,
                        }}
                      >
                        coming soon
                      </p>{" "}
                    </>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
