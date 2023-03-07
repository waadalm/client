import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Routers from "./components/Routers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header> </Header>
        <Routers></Routers>
        <Footer> </Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
