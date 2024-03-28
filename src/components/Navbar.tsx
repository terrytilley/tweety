import Logo from './Logo';
import NavMenu from './NavMenu';
import NavDropdown from './NavDropdown';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between max-w-6xl mt-1 mx-2 lg:mx-auto">
      <div className="block md:hidden" />

      <Logo />

      <div className="hidden md:block">
        <NavMenu />
      </div>

      <NavDropdown />
    </div>
  );
}
