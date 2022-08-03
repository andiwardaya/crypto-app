import axios from "axios";
import React, { useEffect, useState } from "react";

const CoinPage = () => {
  const url = "https://api.coingecko.com/api/v3/coins/bitcoin";

  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoinData(response.data);
    });
  }, [url]);

  return (
    <div>
      <h1>{coinData.symbol}</h1>
    </div>
  );
};

export default CoinPage;
