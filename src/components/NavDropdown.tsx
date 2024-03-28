import clsx from 'clsx';
import { Fragment } from 'react';
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
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right border border-[#212121] rounded-2xl bg-white dark:bg-[#181818] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-[#383839]">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={clsx(
                      active ? '' : 'text-white',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    Appearance
                  </a>
                )}
              </Menu.Item>
            </div>

            <div className="py-1">
              <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={clsx(
                        active ? '' : 'text-white',
                        'block w-full px-4 py-2 text-left text-sm',
                      )}
                    >
                      Log out
                    </button>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
