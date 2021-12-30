import Header from "./Common/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

function App() {
  let store = { Main_page: "Apps" };
  return (
    <div id="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home store={store} />} />
        <Route exact path="/about" element={<About store={store} />} />
        <Route exact path="/faq" element={<Faq store={store} />} />
        <Route exact path="/contact" element={<Contact store={store} />} />
      </Routes>
    </div>
  );
}

export default App;
