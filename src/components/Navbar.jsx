import React from "react";

export const Navbar = () => {
  return (
    <>
      <header class=" w-full bg-[#FFFFFF]">
        <nav class="  bg-neutral-primary">
          <div class="flex flex-wrap justify-between items-center mx-auto py-6 px-10">
            <a
              href="https://flowbite.com"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-7"
                alt="Flowbite Logo"
              />
              <span class="self-center text-2xl text-heading font-semibold whitespace-nowrap">
                Waypoint
              </span>
            </a>
          </div>
        </nav>
        <nav className=" bg-neutral-secondary-soft border-b   border-gray-200 text-[#6B7788]">
          <div class="  px-11  py-1 mx-auto">
            <div class="flex items-center justify-between">
              <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-lg">
                <li>
                  <a
                    href="#"
                    class="text-heading hover:underline"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="text-heading hover:underline">
                    Route planner
                  </a>
                </li>
                <li>
                  <a href="#" class="text-heading hover:underline">
                    Saved places
                  </a>
                </li>
                <li>
                  <a href="#" class="text-heading hover:underline">
                    My trip
                  </a>
                </li>
              </ul>
              <div class="flex items-center space-x-6 rtl:space-x-reverse">
                <a
                  href="tel:5541251234"
                  class="text-lg  text-body hover:underline"
                >
                  (555) 412-1234
                </a>
                <a
                  href="#"
                  class="text-lg font-medium text-fg-brand hover:underline"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
