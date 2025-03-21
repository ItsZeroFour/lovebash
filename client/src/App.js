import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
