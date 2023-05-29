import Canvas from "./canvas/index.jsx";
import Cutomizer from "./pages/Cutomizer";
import Home from "./pages/Home";
// import React, { useState, useEffect } from "react";

// const Loader = () => {
//   return <div className="loader">Loading...</div>;
// };

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulating an asynchronous operation
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);
  return (
    <>
      {/* <div>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            
          </div>
        )}
      </div> */}
      <main className="app transition-all ease-in">
        <Home />
        <Canvas />
        <Cutomizer />
      </main>
    </>
  );
}

export default App;
