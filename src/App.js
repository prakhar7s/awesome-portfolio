import Aos from "aos";
import { useEffect } from "react";
import "./App.css";

import Main from "./components/Main";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <div className="app">
      <Main />
    </div>
  );
}

export default App;
