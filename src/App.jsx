import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Purchases } from "./pages/Purchases";
import { Products } from "./pages/Products";
import { Header } from "./components/layouts/Header";
import { ProtectedAuth } from "./components/auth/ProtectedAuth";
import { Cart } from "./components/cart/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedAuth />}>
          <Route path="/purchases" element={<Purchases />} />
        </Route>
        <Route path="/products/:id" element={<Products />} />
        <Route path="/*" element={<h2> Not Found </h2>} />
      </Routes>
      <Cart />
    </>
  );
}

export default App;
