import React from "react";

export const RouteResult = () => {
  let style = {};

  return (
    <>
      <div className="w-full max-w-lg  border border-gray-200 bg-[#F7F9FC] px-11 py-7 shadow-sm">
        <h5
          style={{ fontWeight: "medium" }}
          className="mb-3 text-xl font-thin text-gray-900"
        >
          Choose your route
          <p className="text-sm  mt-1 text-[#6B7788] space-x-2">
            <span>Live traffic</span> <span>Updated just now</span>
          </p>
        </h5>

        <div className=" space-y-3">
          <div class="bg-[#FFFFFF] block  px-6 py-4 border   border-gray-200 rounded-2xl shadow-xs hover:bg-neutral-secondary-medium">
            <h5 class="flex justify-start align-center w-full mb-3 text-xl font-semibold tracking-tight text-heading leading-8 ">
              <div>
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                />
              </div>
              <div className="flex justify-between align-center w-full">
                <div
                  style={{ fontWeight: "bold" }}
                  for="default-radio-1"
                  className=" text-3xl select-none ms-2 text-heading"
                >
                  29 min
                </div>

                <div className="text-base text-[#2563EB]">Fastest</div>
              </div>
            </h5>

            <div className="mx-6">
              <p style={{ fontWeight: "bold" }} className="text-body ">
                via Lombard St & US-101N
              </p>
              <p
                style={{ fontWeight: "normal" }}
                className="text-[#6B7788]  text-body"
              >
                Typical traffic
              </p>
            </div>

            <div className="border my-3 border-gray-300"></div>

            <div className="flex justify-between align-center">
              <p className="text-[#6B7788] ">Arrive at 10:11 AM</p>
              <a className="text-[#2563EB]" href="">
                View direction <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>

          <div class="bg-[#FFFFFF] block  px-6 py-4 border   border-gray-200 rounded-2xl shadow-xs hover:bg-neutral-secondary-medium">
            <h5 class="flex justify-start align-center w-full mb-3 text-xl font-semibold tracking-tight text-heading leading-8 ">
              <div>
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                />
              </div>
              <div className="flex justify-between align-center w-full">
                <div
                  style={{ fontWeight: "bold" }}
                  for="default-radio-1"
                  className=" text-3xl select-none ms-2 text-heading"
                >
                  29 min
                </div>

                <div className="text-base text-[#2563EB]">Fastest</div>
              </div>
            </h5>

            <div className="mx-6">
              <p style={{ fontWeight: "bold" }} className="text-body ">
                via Lombard St & US-101N
              </p>
              <p
                style={{ fontWeight: "normal" }}
                className="text-[#6B7788]  text-body"
              >
                Typical traffic
              </p>
            </div>

            <div className="border my-3 border-gray-300"></div>

            <div className="flex justify-between align-center">
              <p className="text-[#6B7788] ">Arrive at 10:11 AM</p>
              <a className="text-[#2563EB]" href="">
                View direction <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>

          <div class="bg-[#FFFFFF] block  px-6 py-4 border   border-gray-200 rounded-2xl shadow-xs hover:bg-neutral-secondary-medium">
            <h5 class="flex justify-start align-center w-full mb-3 text-xl font-semibold tracking-tight text-heading leading-8 ">
              <div>
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                />
              </div>
              <div className="flex justify-between align-center w-full">
                <div
                  style={{ fontWeight: "bold" }}
                  for="default-radio-1"
                  className=" text-3xl select-none ms-2 text-heading"
                >
                  29 min
                </div>

                <div className="text-base text-[#2563EB]">Fastest</div>
              </div>
            </h5>

            <div className="mx-6">
              <p style={{ fontWeight: "bold" }} className="text-body ">
                via Lombard St & US-101N
              </p>
              <p
                style={{ fontWeight: "normal" }}
                className="text-[#6B7788]  text-body"
              >
                Typical traffic
              </p>
            </div>

            <div className="border my-3 border-gray-300"></div>

            <div className="flex justify-between align-center">
              <p className="text-[#6B7788] ">Arrive at 10:11 AM</p>
              <a className="text-[#2563EB]" href="">
                View direction <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border bg-[#FFFFFF]  border-gray-300 flex justify-center align-center py-7.5 space-x-3">
        <div>
          <button
            style={{ fontWeight: "font-medium" }}
            type="button"
            class="text-black border flex space-x-1 rounded-xl border-gray-300 bg-[#FFFFFF]  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-base text-xl px-15 py-4 text-center leading-5"
          >
            <i className=" fa-regular fa-bookmark"></i>
            <p>Save trip</p>
          </button>
        </div>
      </div>
    </>
  );
};
