import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export const NavbarDropDown = ({ item }) => {
  return (
    <Popover className="relative ">
      <>
        <Popover.Button className="border-0 focus:outline-0">
          <span className="nav-link text-white" href="#services">
            {item.name}
          </span>
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 ">
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative grid gap-8 bg-white p-7 ">
                {item.children?.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  );
};
