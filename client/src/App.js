import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./componants/Header/Header";
import Footer from "./componants/Footer/Footer";
import Slider from "./componants/Slider/Slider";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Slider />
        <Footer />
      </div>
    </>
  );
}

export default App;
