import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { FaYoutube, FaLinkedin, FaInstagramSquare } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { SiLinktree } from "react-icons/si";


export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center gap-2 py-6 w-full shrink-0 border-t">
      <div className="w-full md:px-0 px-8 flex flex-col gap-8">
        <div className="flex justify-center items-start md:flex-row flex-col md:gap-24 gap-8">

          <div className='flex justify-center items-center flex-row'>
            <Image alt="Brainchant Logo" src="/logo_cropped.png" width={50} height={50} className='invert dark:invert-0 '/>
            {/* <p className="text-xl font-bold">
              Brainchant
            </p> */}
          </div>

          <div> 
              <h2 className="font-bold text-lg mb-2">Contact Information</h2>
              {/* <p className="mb-2">New Delhi, India</p> */}
              <p className="mb-2">
                {/* <span className='font-bold'>Email:</span>  */}
              <Link href={"mailto:brainchantofficial@gmail.com"}>brainchantofficial@gmail.com</Link></p>
            </div>


          <div>
            <h3 className="font-bold text-lg mb-2">Get Started</h3>
            <ul className="space-y-2">
            <li>
                <Link
                  className="block text-foreground hover:text-accent/90 transition-all ease-in-out duration-200"
                  href="/about-us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="block text-foreground hover:text-accent/90 transition-all ease-in-out duration-200"
                  href="/search"
                >
                  Search
                </Link>
              </li>
              <li>
                <Link
                  className="block text-foreground hover:text-accent/90 transition-all ease-in-out duration-200"
                  href="/signin"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  className="block text-foreground hover:text-accent/90 transition-all ease-in-out duration-200"
                  href="/signup"
                >
                  Sign Up
                </Link>
              </li>
              
              
            </ul>
          </div>
          {/* <div>
            <h3 className="font-bold text-lg mb-2">Column Two</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  className="block text-foreground hover:text-accent/90 transition-all ease-in-out duration-200"
                  href="#"
                >
                  Link Six
                </Link>
              </li>
              <li>
                <Link
                  className="block text-foreground hover:text-accent/90 transition-all ease-in-out duration-200"
                  href="#"
                >
                  Link Seven
                </Link>
              </li>
              <li>
                <Link
                  className="block text-foreground hover:text-accent/90 transition-all ease-in-out duration-200"
                  href="#"
                >
                  Link Eight
                </Link>
              </li>
              <li>
                <Link
                  className="block text-foreground hover:text-accent/90 transition-all ease-in-out duration-200"
                  href="#"
                >
                  Link Nine
                </Link>
              </li>
              <li>
                <Link
                  className="block text-foreground hover:text-accent/90 transition-all ease-in-out duration-200"
                  href="#"
                >
                  Link Ten
                </Link>
              </li>
            </ul>
          </div> */}
          <div>
            <h3 className="font-bold text-lg mb-2">Follow us</h3>
            <ul className="gap-4 flex justify-center items-center [&_li]:scale-105">
              <Link target='_blank' rel={"norefferer"} href="https://linktr.ee/BrainChant">
                <li className="flex items-center space-x-2">
                  <SiLinktree className="text-foreground/90 w-6 h-6 hover:text-accent/90 transition-all ease-in-out duration-200" />
                </li>
              </Link>
              <Link target='_blank' rel={"norefferer"} href="https://www.instagram.com/brainchant.in/">
                <li className="flex items-center space-x-2">
                  <GrInstagram className="text-foreground/90 w-6 h-6 hover:text-accent/90 transition-all ease-in-out duration-200" />
                </li>
              </Link>
              <Link target='_blank' rel={"norefferer"} href="https://www.x.com/">
                <li className="flex items-center space-x-2">
                  <FaXTwitter className="text-foreground/90 w-6 h-6 hover:text-accent/90 transition-all ease-in-out duration-200" />
                </li>
              </Link>
              <Link target='_blank' rel={"norefferer"} href="https://www.linkedin.com/company/brainchantofficial/">
                <li className="flex items-center space-x-2">
                  <FaLinkedin className="text-foreground/90 w-6 h-6 hover:text-accent/90 transition-all ease-in-out duration-200" />
                </li>
              </Link>
              <Link target='_blank' rel={"norefferer"} href="https://www.youtube.com/channel/UCEljKeBT4nQiJZeNX4C3ljA">
                <li className="flex items-center space-x-2">
                  <FaYoutube className="text-foreground/90 w-6 h-6 hover:text-accent/90 transition-all ease-in-out duration-200" />
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="text-sm text-foreground/80 flex flex-col items-center gap-4 justify-center">
          <span>© 2023 Brainchant. All rights reserved.</span>
          {/* <div className="flex space-x-4">
            <Link className="hover:text-gray-800" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-gray-800" href="#">
              Terms of Service
            </Link>
            <Link className="hover:text-gray-800" href="#">
              Cookies Settings
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}