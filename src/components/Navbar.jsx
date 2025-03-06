import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { logout } from "../store/slices/authSlice";
import toast from "react-hot-toast";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    toast.success("Logged out successfully!");
  };

  const navigation = user?.role === "employer"
    ? [
        { name: "Employer Dashboard", href: "/employer-dashboard" },
        { name: "Post a Job", href: "/post-job" },
        { name: "Job Applications", href: "/job-applications" },
        { name: "Profile", href: "/profile" },
      ]
    : [
        { name: "Home", href: "/" },
        { name: "Jobs", href: "/jobs" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        ...(user ? [{ name: "Profile", href: "/profile" }] : []),
      ];

  return (
    <Disclosure as="nav" className="bg-white shadow-md sticky top-0 z-50 h-[12vh] flex items-center">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-40 w-full">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-orange-500 hover:text-orange-400 transition-colors">
                  <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                    <span className="text-2xl font-bold">JobPortal</span>
                  </motion.span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:items-center sm:space-x-6 mx-auto">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      location.pathname === item.href ? "border-orange-600 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300",
                      "inline-flex items-center border-b-2 px-1 pt-1 text-[18px] font-medium transition-colors relative group"
                    )}
                  >
                    {item.name}
                    <motion.span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full" initial={{ width: 0 }} animate={{ width: location.pathname === item.href ? "100%" : 0 }} />
                  </Link>
                ))}
              </div>

              {/* Profile/Logout or Login/Register */}
              <div className="hidden sm:flex items-center space-x-4">
                {user ? (
                 <button
                 onClick={handleLogout}
                 className="bg-orange-500 text-white px-4 py-2 rounded-md text-[18px] font-medium hover:bg-orange-600"
               >
                 Logout
               </button>
               
                ) : (
                  <>
                    <Link to="/login" onClick={() => toast.success("Welcome Back!")} className="text-gray-500 hover:text-gray-900 px-3 py-2 text-[18px] font-medium">
                      Login
                    </Link>
                    <Link to="/register" onClick={() => toast.success("Create your account!")} className="bg-orange-500 text-white px-4 py-2 rounded-md text-[18px] font-medium hover:bg-orange-600">
                      Sign Up
                    </Link>
                  </>
                )}
              </div>

              {/* Mobile Menu Button */}
              <div className="-mr-2 flex sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100">
                  {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden">
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute top-full left-0 w-full bg-white shadow-md"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={classNames(
                      location.pathname === item.href ? "bg-orange-100 text-orange-600" : "text-gray-500 hover:bg-gray-50",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}

                {/* Mobile Profile/Logout or Login/Register */}
                {user ? (
                  <Disclosure.Button
                  as="button"
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-gray-700 font-medium transition-all duration-200 rounded-md hover:bg-gray-200 hover:text-gray-900"
                >
                  Logout
                </Disclosure.Button>
                
                ) : (
                  <>
                    <Disclosure.Button as={Link} to="/login" onClick={() => toast.success("Welcome Back!")} className="block px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-md">
                      Login
                    </Disclosure.Button>
                    <Disclosure.Button as={Link} to="/register" onClick={() => toast.success("Create your account!")} className="block px-3 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                      Sign Up
                    </Disclosure.Button>
                  </>
                )}
              </div>
            </motion.div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
