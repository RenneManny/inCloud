import { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  FolderPlus,
  HardDrive,
  Trash2,
  Settings,
  UserMinus,
} from 'lucide-react';
import sole_logo from '../assets/images/text_logo.png';
import user from '../assets/images/user.jpg';
const menuItems = [
  { text: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { text: 'Create New', icon: <FolderPlus size={20} /> },
  { text: 'Drive', icon: <HardDrive size={20} /> },
  { text: 'Trash', icon: <Trash2 size={20} /> },
  { text: 'Settings', icon: <Settings size={20} /> },
  { text: 'Delete Account', icon: <UserMinus size={20} /> },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <>
      <nav className="relative px-4 flex justify-between items-center bg-white dark:bg-gray-800 shadow-md dark:border-gray-600">
        <div className="flex items-center gap-2">
          <img src={sole_logo} alt="logo" className="w-24" />
        </div>

        <div className="lg:hidden">
          <button
            className="flex items-center text-violet-600 dark:text-gray-100 p-1"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Hamburger menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>


        <div className="hidden lg:flex flex-1 justify-center">
          <div className="relative w-full max-w-md text-gray-600">
            <input
              type="search"
              placeholder="Search"
              className="border border-gray-300 placeholder-current h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none dark:bg-gray-500 dark:border-gray-50 dark:text-gray-200 w-full"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <svg
                className="text-gray-600 dark:text-gray-200 h-4 w-4 fill-current"
                viewBox="0 0 56.966 56.966"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md"
          >
            {darkMode ? (
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1z" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          <img
            src={user}
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
          />
        </div>
      </nav>
{/* iphone  */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-gray-800 opacity-50"
            onClick={toggleMenu}
          ></div>
          <nav className="fixed bg-white dark:bg-gray-600 top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto">
            {/* Close button */}
            <div className="flex items-center mb-8">
              <button className="ml-auto" onClick={toggleMenu}>
                <svg
                  className="h-6 w-6 text-gray-400 hover:text-gray-500 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Links with Lucide Icons */}
            <ul className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <li key={item.text}>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-200"
                    onClick={toggleMenu}
                  >
                    {item.icon} {item.text}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center gap-3 pt-6">
              <img
                src={user}
                alt="user"
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
              />
              <div className="flex flex-col overflow-hidden">
                <h4 className="font-semibold truncate">user_name</h4>
                <span className="text-sm text-gray-600 truncate">
                  someone@example.com
                </span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
