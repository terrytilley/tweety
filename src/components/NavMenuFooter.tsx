import Link from 'next/link';

import { type MenuItem } from '~/types';

interface Props {
  menuItems: MenuItem[];
}

export default function NavMenuFooter({ menuItems }: Props) {
  return (
    <nav className="w-full grid md:hidden grid-cols-5 fixed bottom-0 backdrop-blur-sm bg-navbarWhite dark:bg-navbarBlack">
      {menuItems.map((item, index) => (
        <Link key={index} href={item.href} className="mx-auto pt-5 pb-5">
          <item.icon
            className="h-8 w-7 flex-none text-[#b8b8b8] dark:text-[#4d4d4d]"
            aria-hidden="true"
          />
        </Link>
      ))}
    </nav>
  );
}
