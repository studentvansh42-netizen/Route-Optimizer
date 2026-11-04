import { useState } from "react";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { RouteForm } from "./components/RouteForm";
import MapboxExample from "./components/MAP/Map";
import { RoutePlaces } from "./components/RoutePlaces";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="flex w-full ">
        <div className=" w-[44%]">
          <RouteForm />
        </div>
        <div className="mapcontainer w-full ">
          <MapboxExample />
        </div>
      </div>
      <RoutePlaces />
      
    </>
  );
}

export default App;
