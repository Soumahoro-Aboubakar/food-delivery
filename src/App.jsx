import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hearder from "./components/Hearder";
import Prices from "./components/Prices";
import Section from "./components/Section";
import logo from "./logo.svg";

function App() {
  return (
    <div className="mx-2 lg:ml-20   min-h-scree">
      <Hearder />
      <div className="items-center min-h-screen">
        <Feature />
        <Section />
        <Prices />
        <Footer />
      </div>
    </div>
  );
}

export default App;
