import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LocationPinIcon from '@mui/icons-material/LocationPin';

export const RouteSearch = () => {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <div className="w-full max-w-lg  border border-gray-200 bg-[#FFFFFF] px-11 py-7 shadow-sm">
        <form>
          <h5 style={{ fontWeight: "bold" }} className="mb-3 text-3xl  text-gray-900">
            Where are we headed?
            <p className=" text-base mt-1 text-[#6B7788]">
              A better way from here to there.
            </p>
          </h5>

          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            className=" mb-4 w-full"
          >
            <ToggleButton className=" w-full" value="web">
              OP 1
            </ToggleButton>
            <ToggleButton className=" w-full" value="android">
              OP 2
            </ToggleButton>
            <ToggleButton className=" w-full" value="ios">
              OP 3
            </ToggleButton>
            <ToggleButton className=" w-full" value="ios">
              OP 4
            </ToggleButton>
          </ToggleButtonGroup>

          <div className="mb-4">
            <Box
              className=" w-full space-y-3 "
              component="form"
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  className=" w-full"
                  id="outlined-basic"
                  label="Source"
                  variant="outlined"
                />
              </div>
              <div>
                <TextField
                  className=" w-full"
                  id="filled-basic"
                  label="Destination"
                  variant="filled"
                />
              </div>
            </Box>
          </div>

          <div className="my-4">
           
               <p className=" text-[#18283B] text-sm"> <i className=" text-[#6B7788] fa-solid fa-location-dot"></i>Leave now</p> 
          
          </div>
        

          <button
            type="submit"
            className="mb-3 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
          <i className= "mx-2 fa-solid fa-route"></i>
              Find Routes
          </button>

        </form>

        <div>
        </div>
      </div>
    </>
  );
};
