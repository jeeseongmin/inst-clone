import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className='sticky top-0 z-50 bg-white border-b shadow-sm'>
      {/* Left */}
      {/* Responsive - Mobile */}
      <div className='flex items-center justify-between max-w-6xl mx-5 xl:mx-auto'>
        <div
          onClick={() => router.push("/")}
          className='relative hidden w-24 h-24 cursor-pointer lg:inline-grid'>
          <Image
            src='https://links.papareact.com/ocw'
            layout='fill'
            alt='instgram logo'
            objectFit='contain'
          />
        </div>
        {/* Responsive - Web */}
        <div
          onClick={() => router.push("/")}
          className='relative flex-shrink-0 w-10 h-10 cursor-pointer lg:hidden'>
          <Image
            src='https://links.papareact.com/jjm'
            layout='fill'
            alt='instgram logo'
            objectFit='contain'
          />
        </div>
        {/* Middle - Search input field */}
        <div className='max-w-xs'>
          <div className='relative p-3 mt-1 rounded-md '>
            <div className='absolute inset-y-0 flex items-center pl-3 pointer-events-none'>
              <SearchIcon className='w-5 h-5 text-gray-500' />
            </div>
            <input
              type='text'
              className='block w-full pl-10 rounded-md border-gray bg-gray-50 sm:text-sm focus:ring-black focus:border-black '
              placeholder='Search'
            />
          </div>
        </div>
        {/* Right */}
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon onClick={() => router.push("/")} className='navBtn' />
          <MenuIcon className='w-6 cursor-pointer md:hidden' />

          {session ? (
            <>
              <div className='relative navBtn'>
                <PaperAirplaneIcon className='rotate-45 navBtn' />
                <div className='absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2 animate-pulse'>
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className='navBtn'
              />
              <UserGroupIcon className='navBtn' />
              <HeartIcon className='navBtn' />

              <img
                onClick={signOut}
                src={session.user.image}
                alt='user'
                className='w-10 h-10 rounded-full cursor-pointer '
              />
            </>
          ) : (
            <>
              <button onClick={signIn}>Sign In</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
