import React from "react";
import { useEffect,useState } from 'react';
import axios from 'axios';
import Icon from '@mdi/react';
import {
  mdiAirplane,
  mdiChartBarStacked,
  mdiBank,
} from '@mdi/js';

const Statistics = () => {
  const [Airlines , setAirlines] = useState([]);
  const ApiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const ReactUrl = import.meta.env.VITE_REACT_APP_API_REACT_URL;


  const getAirlines = async () => {
    const response = await axios.get(`${ApiUrl}/AllAirLines`);
    setAirlines(response.data);
  }
 
  useEffect(()=>{
    getAirlines();
  },[])

  const sumBaGuard = Airlines.reduce((total, item) => total + item.BaGuard, 0);

  const formattedNumber = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    maximumFractionDigits: 2,
  }).format(sumBaGuard);
  
const TotalRevenue =  sumBaGuard * 15

const formattedRevenue = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format(TotalRevenue);


  return (
    <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6 p-10">
      <div className="!z-5 relative flex bg-blue-300 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px]">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">

          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700 ">
            <span className="flex items-center text-brand-500 dark:text-white">
            <Icon   path={mdiAirplane } size={1} />
            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-black">Total Airlines</p>
          <h4 className="text-xl font-bold text-black">
            {Airlines.length}
          </h4>
        </div>
      </div>
      <div className="!z-5 relative flex  bg-blue-300 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px] ">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
            <Icon  path={mdiChartBarStacked} size={1} />

            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-black">
            Total BaGuards
          </p>
          <h4 className="text-xl font-bold text-black">
          {formattedNumber}
          </h4>
        </div>
      </div>
      <div className="!z-5 relative flex  bg-blue-300 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px] ">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
            <Icon  path={mdiBank} size={1} />
            

            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-black">Total Revenue</p>
          <h4 className="text-xl font-bold text-black">
           {formattedRevenue}
          </h4>
        </div>
      </div>

    </div>
  );
};

export default Statistics;
