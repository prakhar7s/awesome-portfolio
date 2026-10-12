import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Main from "./components/Main";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 80,
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div className="app">
      <Main />
    </div>
  );
}

export default App;
