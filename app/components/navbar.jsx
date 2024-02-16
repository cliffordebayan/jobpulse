'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="navbar bg-base-100 shadow fixed z-[999]">
      <div className="flex flex-row justify-between mx-auto lg:max-w-7xl px-6 w-full">
        <div className="flex-1">
          <Link
            href={'/'}
            className={`btn btn-ghost text-xl  ${
              pathname === '/' ? 'text-[#0E5FD9] ' : ' '
            }`}
          >
            <Image
              src="/logo.svg"
              width={37}
              height={31}
              alt="Picture of the author"
            />
            JobPulse
          </Link>
        </div>
        <div className="hidden lg:block flex-none">
          <ul className="menu menu-horizontal px-1 font-medium text-[#6C6C72] gap-2">
            <li>
              <Link
                href={'/'}
                className={`${pathname === '/' ? 'text-[#0E5FD9] ' : ' '}`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href={'/companies-overview'}
                className={`${
                  pathname === '/companies-overview' ? 'text-[#0E5FD9] ' : ' '
                }`}
              >
                COMPANIES OVERVIEW
              </Link>
            </li>
            <li>
              <Link
                href={'/company-profiles'}
                className={`${
                  pathname.startsWith('/company-profiles')
                    ? 'text-[#0E5FD9] '
                    : ' '
                }`}
              >
                COMPANY PROFILES
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden flex-end flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  href={'/'}
                  className={`${pathname === '/' ? 'text-[#0E5FD9] ' : ' '}`}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href={'/companies-overview'}
                  className={`${
                    pathname === '/companies-overview' ? 'text-[#0E5FD9] ' : ' '
                  }`}
                >
                  COMPANIES OVERVIEW
                </Link>
              </li>
              <li>
                <Link
                  href={'/company-profiles'}
                  className={`${
                    pathname.startsWith('/company-profiles')
                      ? 'text-[#0E5FD9] '
                      : ' '
                  }`}
                >
                  COMPANY PROFILES
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
