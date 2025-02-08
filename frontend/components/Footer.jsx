import Link from "next/link";
import { BsEnvelope } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { PiDiscordLogo } from "react-icons/pi";
import { MdOutlineQuiz } from "react-icons/md";

const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer className=" text-white px-10 py-8">
      <div className="max-w-7xl mx-auto space-y-8 ">
        <div className="flex flex-col gap-10 md:flex-row justify-between">
          {/* Logo and Description Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">AtomaQuiz</h2>
            <p className="text-gray-300 max-w-2xl">
              Master the Quiz, Win Big! Test your knowledge with AI-generated
              trivia challenges. Wager tokens, outsmart your opponents, and aim
              for the top spot. Whether it's solo play, or thrilling multiplayer
              battles, AtomaQuiz delivers endless excitement. Let the quiz
              challenge begin! 🎮
            </p>
          </div>

          {/* Navigation and Social Links */}
          <div className="flex flex-col md:flex-col gap-5 items-center md:items-end space-y-3 md:space-y-0">
            {/* Navigation Links */}
            <nav className="flex flex-wrap gap-4 text-xs font-[geist]">
              <Link
                href="/play"
                className="hover:text-gray-300 transition-colors"
              >
                Play Game
              </Link>
              <Link
                href="/about"
                className="hover:text-gray-300 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="hover:text-gray-300 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/privacy"
                className="hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-gray-300 transition-colors"
              >
                Terms of Service
              </Link>
            </nav>

            {/* Social Media Icons */}
            <div className="flex gap-14 md:gap-8">
              {[
                MdOutlineQuiz,
                BsEnvelope,
                FaInstagram,
                CiFacebook,
                FaXTwitter,
                PiDiscordLogo,
              ].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="hover:bg-[#fff]  transition-colors p-2 rounded-full"
                >
                  <Icon className="h-5 w-5 text-white hover:text-[#1F2937]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center text-sm text-[#FFFFFF] pt-7 border-t border-[#FFFFFF]">
          &copy; {getCurrentYear()} AtomaQuiz. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
