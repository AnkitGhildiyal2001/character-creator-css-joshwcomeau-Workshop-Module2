import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

const mystyle = {
  backgroundColor: "hsl(180deg, 25%, 80%)",
  position: "fixed",
  bottom: "0",
  width: "100%",
  height: "270px"
};

function App() {
  return (
    <>
      <div style={mystyle}></div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
