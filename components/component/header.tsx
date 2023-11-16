import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BrainchantLogoPNG from "@/public/logo_cropped.png"
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  return (

    <header className='sticky top-0 bg-background/50 backdrop-blur-xl'>
        <div className="px-8 lg:px-12 h-16 py-2 flex items-center">
        <div className='flex gap-16 items-center'>
        <Link className="flex items-center justify-center" href="#">
          <Image src={BrainchantLogoPNG} alt='Brainchant Logo' className='w-10 h-10 invert dark:invert-0'></Image>
        </Link>
        <div className='flex gap-8'>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Courses
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Contact
            </Link>
          </div>
        </div>
        
        <nav className="ml-auto flex justify-center items-center gap-6 sm:gap-6">
          <div className='flex gap-2'>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              <Button variant={"outline"} className='hover:bg-primary px-5 bg-background/0'>Login</Button>
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              <Button variant={"outline"} className='hover:bg-primary px-5 bg-background/0'>Signup</Button>
            </Link>
          </div>
          
        </nav>
        </div>
        
    </header>

    )
}
