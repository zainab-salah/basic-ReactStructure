import React from "react";
import AppRouter from "./AppRouter";
import NavBar from "./Components/NavBar";
import { Suspense } from 'react';
const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div className="container">Loading...</div>}>

      <AppRouter />
      </Suspense>
    </>
  );
};

export default App;
