import React from "react";
import StockChart from "../Components/StockChart";
import Card from "./Card";
import Stat from "../Components/Stat";
const StatisticsAirline = () => {
  const data = {
    stockFullName: "SW Limited.",
    stockShortName: "ASX:SFW",
    price: {
      current: 2.32,
      open: 2.23,
      low: 2.215,
      high: 2.325,
      cap: 93765011,
      ratio: 20.1,
      dividend: 1.67,
    },
    chartData: {
      labels: [
        "10:00",
        "",
        "",
        "",
        "12:00",
        "",
        "",
        "",
        "2:00",
        "",
        "",
        "",
        "4:00",
      ],
      data: [
        2.23, 2.215, 2.22, 2.25, 2.245, 2.27, 2.28, 2.29, 2.3, 2.29, 2.325,
        2.325, 2.32,
      ],
    },
  };

  return (
    <>
      <div className="flex flex-col gap-5 items-start justify-start px-10 ">
        <div className="font-bold text-3xl">Statistics</div>
        <div className="pb-5">
          <Card />
        </div>
          <StockChart info={data} />
         
          <StockChart info={data} />
        <Stat/>
        
      </div>
    </>
  );
};

export default StatisticsAirline;
