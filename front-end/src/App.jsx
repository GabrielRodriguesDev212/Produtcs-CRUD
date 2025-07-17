import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/content/products";
import Header from "./components/content/Header";
import Home from "./pages/Home";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
