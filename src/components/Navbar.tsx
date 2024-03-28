import { type MenuItem } from '~/types';
import Logo from './Logo';
import NavMenuHeader from './NavMenuHeader';
import NavDropdown from './NavDropdown';

interface Props {
  menuItems: MenuItem[];
}

export default function Navbar({ menuItems }: Props) {
  return (
    <div className="flex items-center justify-between max-w-6xl mt-1 mx-2 lg:mx-auto">
      <div className="block md:hidden" />
      <Logo />
      <NavMenuHeader menuItems={menuItems} />
      <NavDropdown />
    </div>
  );
}
