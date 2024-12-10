import "./App.css";
import AboutUs from "./Components/Content/AboutUs";
import Banner from "./Components/Content/Banner";
import Cart from "./Components/Content/Cart";
import ContactUs from "./Components/Content/ContactUs";
import DataRow from "./Components/Content/DataRow";
import ViewItem from "./Components/Content/ViewItem";
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
        <Route path="/itemView" element={<ViewItem />} />
        <Route path="contact-us" element={<ContactUs />}   />
      </Routes>
    </div>
  );
}

export default App;
