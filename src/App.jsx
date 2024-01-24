import Header from "./componants/Header/Header";
import Hero from "./componants/Hero/Hero";
import "./App.css";
import Companies from "./componants/Companies/Companies";
import Residencies from "./componants/Residencies/Residencies";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
        <Companies />
        <Residencies />
      </div>
    </div>
  );
}

export default App;
