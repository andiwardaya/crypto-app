import React from "react";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { Sparklines, SparklinesLine } from "react-sparklines";

function CoinItem({ coin }) {
  return (
    <tr className="h-[60px] border-b overflow-hidden border-gray-300">
      <td>
        <PlusCircleIcon className="w-4" />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <div className="flex space-x-1 items-center">
          <img alt={coin.id} src={coin.image} className="w-8" />
          <p>{coin.name}</p>
        </div>
      </td>
      <td>{coin.symbol}</td>
      <td>Rp {coin.current_price}</td>
      <td>
        {coin.price_change_percentage_24h > 0 ? (
          <p className="text-green-500">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-red-600">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className="hidden md:table-cell">{coin.total_volume}</td>
      <td className="hidden md:table-cell">{coin.market_cap}</td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="red" />
        </Sparklines>
      </td>
    </tr>
  );
}

export default CoinItem;
