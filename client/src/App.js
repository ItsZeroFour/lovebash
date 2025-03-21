import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Signin from "./pages/signin/Signin";
import Register from "./pages/register/Register";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
