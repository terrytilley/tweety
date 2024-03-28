import Link from 'next/link';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  HeartIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

export default function NavMenu() {
  return (
    <nav>
      <ul role="list" className="flex min-w-full md:gap-x-3">
        <li className="flex items-center justify-center rounded-md hover:bg-[#f5f5f5] dark:hover:bg-[#1c1c1c]">
          <Link
            href="/"
            className="flex items-center justify-center w-[64px] md:w-[73px] h-[68px] md:h-[52px]"
          >
            <HomeIcon
              className="h-8 w-7 flex-none text-[#b8b8b8] dark:text-[#4d4d4d]"
              aria-hidden="true"
            />
          </Link>
        </li>

        <li className="flex items-center justify-center rounded-md hover:bg-[#f5f5f5] dark:hover:bg-[#1c1c1c]">
          <Link
            href="/"
            className="flex items-center justify-center w-[64px] md:w-[73px] h-[68px] md:h-[52px]"
          >
            <MagnifyingGlassIcon
              className="h-8 w-7 flex-none text-[#b8b8b8] dark:text-[#4d4d4d]"
              aria-hidden="true"
            />
          </Link>
        </li>

        <li className="flex items-center justify-center rounded-md hover:bg-[#f5f5f5] dark:hover:bg-[#1c1c1c]">
          <Link
            href="/"
            className="flex items-center justify-center w-[64px] md:w-[73px] h-[68px] md:h-[52px]"
          >
            <PencilSquareIcon
              className="h-8 w-7 flex-none text-[#b8b8b8] dark:text-[#4d4d4d]"
              aria-hidden="true"
            />
          </Link>
        </li>

        <li className="flex items-center justify-center rounded-md hover:bg-[#f5f5f5] dark:hover:bg-[#1c1c1c]">
          <Link
            href="/"
            className="flex items-center justify-center w-[64px] md:w-[73px] h-[68px] md:h-[52px]"
          >
            <HeartIcon
              className="h-8 w-7 flex-none text-[#b8b8b8] dark:text-[#4d4d4d]"
              aria-hidden="true"
            />
          </Link>
        </li>

        <li className="flex items-center justify-center rounded-md hover:bg-[#f5f5f5] dark:hover:bg-[#1c1c1c]">
          <Link
            href="/"
            className="flex items-center justify-center w-[64px] md:w-[73px] h-[68px] md:h-[52px]"
          >
            <UserIcon
              className="h-8 w-7 flex-none text-[#b8b8b8] dark:text-[#4d4d4d]"
              aria-hidden="true"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
