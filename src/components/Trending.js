import axios from "axios";
import React, { useEffect, useState } from "react";

function Trending() {
  const url = "https://api.coingecko.com/api/v3/search/trending";

  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setTrendingCoins(response.data.coins);
    });
  }, [url]);

  return (
    <div className="px-2 py-4 max-w-6xl mx-auto space-y-4">
      <h1 className="font-bold text-2xl">Trending Coins</h1>
      <div className="grid md:grid-cols-2 gap-3">
        {trendingCoins.map((coin) => (
          <div
            key={coin.item.id}
            className="rounded-div flex items-center justify-between"
          >
            <div className="flex space-x-4">
              <img
                src={coin.item.small}
                className="rounded-full"
                alt="coinPic"
              />
              <div>
                <h3 className="font-bold">{coin.item.name}</h3>
                <p className="text-sm">{coin.item.symbol}</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <img
                src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
                className="w-6"
                alt="coinPic"
              />
              <p>{coin.item.price_btc.toFixed(7)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
