import axios from "axios";
import React, { useEffect, useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CoinPage = () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true";

  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoinData(response.data);
    });
  }, [url]);

  console.log(coinData);
  return (
    <div className="max-w-6xl mx-auto px-3">
      <div>
        <h2>Coin Page</h2>
        <h1>{coinData.name}</h1>
      </div>
      <div className="flex items-center justify-between p-3 rounded-xl bg-yellow-200 shadow-emerald-400">
        <div className="flex items-center space-x-4">
          <img src={coinData.image.small} alt="coinPic" className="w-16" />
          <div>
            <h1 className="font-bold text-xl">{coinData.name} Price</h1>
            <p>({coinData.symbol}/USD)</p>
          </div>
        </div>
        <div>
          {coinData.market_data?.current_price ? (
            <p className="text-xl font-bold">
              ${coinData.market_data.current_price.usd.toLocaleString()}
            </p>
          ) : null}
        </div>
      </div>{" "}
      <Sparklines data={coinData.market_data?.sparkline_7d.price}>
        <SparklinesLine color="teal" />
      </Sparklines>
      <div>
        <p>Market Cap</p>
        {coinData.market_data?.market_cap ? (
          <p>{coinData.market_data?.market_cap.usd.toLocaleString()}</p>
        ) : null}
      </div>
      <div>
        <p>Total volume 24h</p>
        {coinData.market_data?.total_volume ? (
          <p> {coinData.market_data?.total_volume.usd.toLocaleString()}</p>
        ) : null}
      </div>
      <p>24H high{coinData.market_data?.high_24h}</p>
      <p>24 low {coinData.market_data?.low_24h}</p>
      <p>About {coinData.description.en}</p>
    </div>
  );
};

export default CoinPage;
