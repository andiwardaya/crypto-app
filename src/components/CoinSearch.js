import React, { useState } from "react";
import CoinItem from "./CoinItem";

function CoinSearch({ coins }) {
  const [search, setSearch] = useState("");

  return (
    <div className="mx-2">
      <div className="max-w-6xl mx-auto border border-gray-300 rounded-md py-5 shadow-xl  my-4 px-2">
        <div className="flex justify-between  px-5">
          <h1>Search a Coin</h1>
          <form>
            <input
              type="text"
              placeholder="search"
              onChange={(e) => setSearch(e.target.value)}
              className="text-sm p-1 rounded-md ring-1 ring-gray-400"
            ></input>
          </form>
        </div>

        <table className="w-full border-collapse text-center border-spacing-6">
          <thead>
            <tr className="border-b">
              <th></th>
              <th>No</th>
              <th className="text-left pl-1">Coin</th>
              <th>Sym</th>
              <th>Harga</th>
              <th>24 Jam</th>
              <th className="hidden md:table-cell">Volume 24 jam</th>
              <th className="hidden md:table-cell">Market</th>
              <th>7 hari terakhir</th>
            </tr>
          </thead>
          <tbody>
            {coins
              .filter((value) => {
                if (search === "") {
                  return value;
                } else if (
                  value.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((coin) => (
                <CoinItem coin={coin} key={coin.id} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CoinSearch;
