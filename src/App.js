import React from "react";

import { Toaster } from 'react-hot-toast';

import Routes from "./routes/routes";

function App() {
  return (
   <React.Fragment>
      <Toaster />
      <Routes />
   </React.Fragment>
  );
}

export default App;