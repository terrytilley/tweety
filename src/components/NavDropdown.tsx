import clsx from 'clsx';
import { Fragment } from 'react';
import { signOut } from 'next-auth/react';
import { Menu, Transition } from '@headlessui/react';
import { Bars2Icon } from '@heroicons/react/24/outline';

export default function NavDropdown() {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <Bars2Icon
              className="h-8 w-7 flex-none text-[#b8b8b8] hover:text-black dark:text-[#4d4d4d] dark:hover:text-white"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right border border-[#f5f5f5] dark:border-[#212121] rounded-2xl bg-white dark:bg-[#181818] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-[#d9d9d9] dark:divide-[#383839]">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={clsx(
                      active ? '' : 'font-medium text-black dark:text-white',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    Appearance
                  </a>
                )}
              </Menu.Item>
            </div>

            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={clsx(
                      active ? '' : 'font-medium text-black dark:text-white',
                      'block w-full px-4 py-2 text-left text-sm',
                    )}
                    onClick={() => signOut()}
                  >
                    Log out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
