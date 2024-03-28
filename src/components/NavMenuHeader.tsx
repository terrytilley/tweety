import Link from 'next/link';

import { type MenuItem } from '~/types';

interface Props {
  menuItems: MenuItem[];
}

export default function NavMenuHeader({ menuItems }: Props) {
  return (
    <nav className="hidden md:block">
      <ul role="list" className="flex min-w-full md:gap-x-3">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center rounded-md hover:bg-[#f5f5f5] dark:hover:bg-[#1c1c1c]"
          >
            <Link
              href={item.href}
              className="flex items-center justify-center w-[64px] md:w-[73px] h-[68px] md:h-[52px]"
            >
              <item.icon
                className="h-8 w-7 flex-none text-[#b8b8b8] dark:text-[#4d4d4d]"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
