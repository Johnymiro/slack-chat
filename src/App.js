import React from "react";
import BasePage from "./pages/BasePage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <BasePage />
    </BrowserRouter>
  );
}

export default App;
