import React from "react";

export const RoutePlaces = () => {
  return (
    <>
      <div className="my-4">
        <div className="m-6">
          <h2 style={{ fontWeight: "bold" }} className=" text-2xl ">
            Amenitire along the route
          </h2>
          <p className="text-sm  mt-1 text-[#6B7788] ">
            Places along your selected route &bull; Samble counts for this
            preview{" "}
          </p>
        </div>

        <div className=" flex justify-evenly align-center space-x-4 mx-6">
          <div class="bg-[#FFFFFF] block   px-6 py-3 border-2   border-[#2563EB] rounded-2xl shadow-xs hover:bg-neutral-secondary-medium">
            <h5 class="flex justify-start align-center w-full mb-3 text-xl font-semibold tracking-tight text-heading leading-8 ">
              <div>
                <i class="fa-solid fa-car"></i>
              </div>
              <div className="flex justify-end align-center w-full">

                <div className="text-base text-[#6B7788] ">Petrol pumps</div>
              </div>
            </h5>

            <div className="flex space-x-2 ">
              <p style={{ fontWeight: "bold" }} className="  text-3xl   ">
                12 
              </p>
              <p
                style={{ fontWeight: "normal" }}
                className="text-[#6B7788]  text-body"
              >
                Stops
              </p>
            </div>


            <div className="flex justify-between mt-3  align-center space-x-3">
              <p className=" text-sm  text-[#6B7788] ">4 station within 1 mile in the route</p>
              <a className="text-[#2563EB]" href="">
                View  <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>

         <div class="bg-[#FFFFFF] block  px-6 py-3 border-2   border-[#2563EB] rounded-2xl shadow-xs hover:bg-neutral-secondary-medium">
            <h5 class="flex justify-start align-center w-full mb-3 text-xl font-semibold tracking-tight text-heading leading-8 ">
              <div>
                <i class="fa-solid fa-cheese"></i>
              </div>
              <div className="flex justify-end align-center w-full">

                <div className="text-base text-[#6B7788] ">Petrol pumps</div>
              </div>
            </h5>

            <div className="flex space-x-2 ">
              <p style={{ fontWeight: "bold" }} className="  text-3xl   ">
                12 
              </p>
              <p
                style={{ fontWeight: "normal" }}
                className="text-[#6B7788]  text-body"
              >
                Stops
              </p>
            </div>


            <div className="flex justify-between mt-3  align-center space-x-3">
              <p className=" text-sm  text-[#6B7788] ">Cafes, diners ,and quick stops along the way.</p>
              <a className="text-[#2563EB]" href="">
                View  <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>

         <div class="bg-[#FFFFFF] block  px-6 py-3 border-2   border-[#2563EB] rounded-2xl shadow-xs hover:bg-neutral-secondary-medium">
            <h5 class="flex justify-start align-center w-full mb-3 text-xl font-semibold tracking-tight text-heading leading-8 ">
              <div>
                <i class="fa-solid fa-archway"></i>
              </div>
              <div className="flex justify-end align-center w-full">

                <div className="text-base text-[#6B7788] ">Petrol pumps</div>
              </div>
            </h5>

            <div className="flex space-x-2 ">
              <p style={{ fontWeight: "bold" }} className="  text-3xl   ">
                12 
              </p>
              <p
                style={{ fontWeight: "normal" }}
                className="text-[#6B7788]  text-body"
              >
                Stops
              </p>
            </div>


            <div className="flex justify-between mt-3  align-center space-x-3">
              <p className=" text-sm  text-[#6B7788] ">Options near the destination and route exits.</p>
              <a className="text-[#2563EB]" href="">
                View  <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>

          <div class="bg-[#FFFFFF] block  px-6 py-3 border-2   border-[#2563EB] rounded-2xl shadow-xs hover:bg-neutral-secondary-medium">
            <h5 class="flex justify-start align-center w-full mb-3 text-xl font-semibold tracking-tight text-heading leading-8 ">
              <div>
                <i class="fa-solid fa-user-injured"></i>
              </div>
              <div className="flex justify-end align-center w-full">

                <div className="text-base text-[#6B7788] ">Petrol pumps</div>
              </div>
            </h5>

            <div className="flex space-x-2 ">
              <p style={{ fontWeight: "bold" }} className="  text-3xl   ">
                12 
              </p>
              <p
                style={{ fontWeight: "normal" }}
                className="text-[#6B7788]  text-body"
              >
                Stops
              </p>
            </div>


            <div className="flex justify-between mt-3  align-center space-x-3">
              <p className=" text-sm  text-[#6B7788] ">Emergency and urgent crae locations nearby.</p>
              <a className="text-[#2563EB]" href="">
                View  <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
