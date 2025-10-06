import { Link } from "@tanstack/react-router";
import logo from "/images/logo1.png";
import { FaInfoCircle, FaShieldAlt, FaFileContract } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
 
  FaPhone,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-[#0e192b] text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700 ">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="rounded-full flex items-center justify-center mr-3 overflow-hidden h-[100px] w-[140px] sm:h-[100px] sm:w-[200px]">
                <Link to="/">
                  <div className="rounded-full flex items-center justify-center h-full w-full">
                    <img
                      src={logo}
                      alt="Nezobank Logo"
                      className="h-35 w-35 object-cover"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <p className="textwhite text-sm max-w-xs">
              Leading cryptocurrency exchange with advanced trading features,
              top-tier security, and deep liquidity for traders worldwide.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="textwhite transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <FaTwitter />
              </a>
              <a href="#" className="textwhite transition-colors duration-200">
                <span className="sr-only">Telegram</span>
                <FaTelegram />
              </a>
              <a href="#" className="textwhite transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <FaInstagram />
              </a>
              <a href="#" className="textwhite transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Trading */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Trading
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/spot"
                  className="textwhite  transition-colors duration-200 text-sm"
                >
                  Spot Trading
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="textwhite  transition-colors duration-200 text-sm"
                >
                  Futures Trading
                </a>
              </li>
              <li>
                <Link
                  to="/margin"
                  className="textwhite  transition-colors duration-200 text-sm"
                >
                  Margin Trading
                </Link>
              </li>
              <li>
                <Link
                  to="/p2p"
                  className="textwhite  transition-colors duration-200 text-sm"
                >
                  P2P Trading
                </Link>
              </li>
              <li>
                <Link
                  to="/oneclickbuy"
                  className="textwhite  transition-colors duration-200 text-sm"
                >
                  One-click-buy
                </Link>
              </li>
            </ul>
          </div>

        

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Support
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-400 mr-3 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <span className="textwhite text-sm">
                  Global Headquarters
                </span>
              </li>
              <li className="flex items-center text-blue-400">
                <FaPhone />

                <span className="textwhite text-sm ml-2">
                  +1 (888) 908-7930
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-blue-400 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="textwhite text-sm">
                  support@Nezobank.com
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-blue-400 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="textwhite text-sm">24/7 Support</span>
              </li>
            </ul>
          </div>
          {/* company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Company
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaInfoCircle className="h-5 w-5 text-blue-400 mr-3" />
                <Link to="/about">
                  <span className="textwhite text-sm">About</span>
                </Link>
              </li>
              <li className="flex items-center">
                <FaShieldAlt className="h-5 w-5 text-blue-400 mr-3" />
                <Link to=".">
                  <span className="textwhite text-sm">Privacy</span>
                </Link>
              </li>
              <li className="flex items-center">
                <FaFileContract className="h-5 w-5 text-blue-400 mr-3" />
                <Link to=".">
                  <span className="textwhite text-sm">
                    Terms & Conditions
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="textwhite text-sm text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Nezobank All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="textwhite  text-sm transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="textwhite  text-sm transition-colors duration-200"
            >
              Terms of Use
            </a>
           
            <a
              href="#"
              className="textwhite  text-sm transition-colors duration-200"
            >
              Fees
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
