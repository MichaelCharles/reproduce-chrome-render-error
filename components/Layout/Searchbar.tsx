import { Menu, MenuButton, MenuItems, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Searchbar() {
  return (
    <>
      <div className="sticky top-0 z-10 flex h-16 shrink-0 items-center bg-white shadow-sm">
        <div className="flex flex-1 justify-end px-4">
          <div className="ml-4 flex items-center md:ml-6">
            <Menu as="div" className="relative ml-2">
              <div>
                <MenuButton className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-700 focus:ring-offset-2">
                  <p>Open menu</p>
                </MenuButton>
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
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100">
                  <div className="h-[80vh]"></div>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}
