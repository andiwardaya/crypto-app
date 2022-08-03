import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import CoinPage from "./routes/CoinPage";
import Signup from "./routes/Signup";
import Account from "./routes/Account";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=10&page=1&sparkline=true";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
    });
  }, [url]);

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home coins={coins} />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/coin/:coinId" element={<CoinPage />}>
          <Route path="coinId"></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
