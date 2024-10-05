import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

  return (
    <div className="navbar bg-base-100 px-4 sm:px-20 md:px-28 lg:px-36">
      <div className="navbar-start">
        <Link href="/" className="text-3xl font-medium flex items-center">
          <Image
            src="./assets/images/logo.svg"
            width={40}
            height={40}
            className="w-10 rounded-lg shadow-2xl shadow-blue-500 mx-1 mr-2"
            alt="Querative Logo"
          />
          Querative
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>How it works?</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown mr-3">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-32 p-2 shadow-md"
          >
            <li>
              <a className="p-2">How it works?</a>
            </li>
            <li>
              <a className="p-2">Pricing</a>
            </li>
            <li>
              <a className="p-2">Contact</a>
            </li>
            <li>
              <a className="p-2">Blog</a>
            </li>
          </ul>
        </div>
        {session?.user ? (
          <Link className="btn btn-outline" href="/search">
            Go to App
          </Link>
        ) : (
          <>
            {isLoading ? (
              <ButtonLoading />
            ) : (
              <button className="btn btn-primary" onClick={handleSignIn}>
                Sign In
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
