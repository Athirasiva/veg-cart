import "./App.css";
import AboutUs from "./Components/Content/AboutUs";
import Banner from "./Components/Content/Banner";
import Cart from "./Components/Content/Cart";
import DataRow from "./Components/Content/DataRow";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <DataRow />
            </>
          }
        />
        <Route path="/about us" element={<AboutUs/> }/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;
