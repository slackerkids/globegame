import Link from "next/link";

const Navbar = () => {

  return (
    <div className="navbar bg-base-100 px-4 sm:px-20 md:px-28 lg:px-36">
      <div className="navbar-start">
        <Link href="/" className="text-3xl font-medium flex items-center font-orbitron">
          Cataclysm
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/cataclysm">Cataclysm</Link>
          </li>
          <li>
            <Link href="/character">Character</Link>
          </li>
          <li>
            <Link href="/tech">Tech</Link>
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
              <Link href="/cataclysm" className="p-2">Cataclysm</Link>
            </li>
            <li>
              <Link href="/character" className="p-2">Character</Link>
            </li>
            <li>
              <Link href="/tech" className="p-2">Tech</Link>
            </li>
          </ul>
        </div>
        <Link href="how-to-play" className="btn btn-primary">How to play it?</Link>
      </div>
    </div>
  );
}

export default Navbar;
