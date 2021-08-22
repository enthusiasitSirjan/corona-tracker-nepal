import "./App.css";
import CountryCard from "./components/CountryCard";
import CountryData from "./components/CountryData";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="two-column">
        <CountryCard />
        <CountryData />
      </div>
    </div>
  );
};

export default App;
