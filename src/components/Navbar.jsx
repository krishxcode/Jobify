import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'Jobs', href: '/jobs', current: location.pathname === '/jobs' },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
    ...(user?.role === 'employer'
      ? [{ name: 'Post Job', href: '/jobs/new', current: location.pathname === '/jobs/new' }]
      : []),
    ...(user
      ? [{ name: 'Profile', href: '/profile', current: location.pathname === '/profile' }]
      : []),
  ];

  return (
    <Disclosure as="nav" className="bg-white shadow-lg sm:sticky md:fixed w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 justify-between items-center">
              {/* Logo on the left */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to="/" className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors">
                    <motion.span
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      JobPortal
                    </motion.span>
                  </Link>
                </div>
              </div>

              {/* Navigation links in the center */}
              <div className="hidden sm:flex sm:items-center sm:space-x-6 sm:mx-auto">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? 'border-primary text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300',
                      'inline-flex items-center border-b-2 px-1 pt-1 text-[18px] font-medium transition-colors relative group'
                    )}
                  >
                    {item.name}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
                      initial={{ width: 0 }}
                      animate={{ width: item.current ? '100%' : 0 }}
                    />
                  </Link>
                ))}
              </div>

              {/* Login/Signup or Profile/Logout on the right */}
              <div className="flex items-center text-[18px]">
                {user ? (
                  <div className="hidden sm:flex sm:items-center sm:space-x-4">
                    <Link
                      to="/profile"
                      className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="hidden sm:flex sm:items-center sm:space-x-4 text-[18px]">
                    <Link
                      to="/login"
                      className="text-gray-500  hover:text-gray-900 px-3 py-2 text-[18px] font-medium transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="bg-primary-600 text-white px-4 py-2 rounded-md text-[18px] font-medium hover:bg-primary-500 transition-colors"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}

                {/* Mobile menu button */}
                <div className="-mr-2 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'block px-3 py-2 text-base font-medium transition-colors'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              {user ? (
                <>
                  <Link
                    to="/profile"
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}