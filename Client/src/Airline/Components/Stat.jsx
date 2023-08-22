import React from 'react'

const Stat = () => {
  return (
<>
{/* 
<div className="flex gap-5 justify-center bg-gray-100 py-10 p-5">
    <div className="container pr-4">
      <div className="w-72 bg-white max-w-xs rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
        <div className="h-20 bg-red-400 flex items-center justify-between">
          <p className="mr-0 text-white text-lg pl-5">BT SUBSCRIBERS</p>
        </div>
        <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
          <p>TOTAL</p>
        </div>
        <p className="py-4 text-3xl ml-5">20,456</p>
        <hr />
      </div>
    </div>
    <div className="container pr-4">
      <div className="w-72 bg-white max-w-xs rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
        <div className="h-20 bg-blue-500 flex items-center justify-between">
          <p className="mr-0 text-white text-lg pl-5">BT ACTIVE SUBSCRIBERS</p>
        </div>
        <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
          <p>TOTAL</p>
        </div>
        <p className="py-4 text-3xl ml-5">19,694</p>
        <hr />
      </div>
    </div>
  
    <div className="container pr-4">
      <div className="w-72 bg-white max-w-xs rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
        <div className="h-20 bg-blue-gray-200 flex items-center justify-between">
          <p className="mr-0 text-white text-lg pl-5">BT OPT OUTS</p>
        </div>
        <div className="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
          <p>TOTAL</p>
        </div>
        <p className="py-4 text-3xl ml-5">711</p>
        <hr />
      </div>
    </div>

    <div className="container">
      <div className="w-72 bg-white max-w-xs rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
        <div className="h-20 bg-blue-gray-900 flex items-center justify-between">
          <p className="mr-0 text-white text-lg pl-5">
            BT TODAY'S SUBSCRIPTION
          </p>
        </div>
        <div className="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
          <p>TOTAL</p>
        </div>
        <p className="py-4 text-3xl ml-5">0</p>
        <hr/ >
      </div>
    </div>
  </div> */}
  <div className="flex w-full flex-wrap gap-5 justify-center py-10 ">
    {/*==== frist div begins here ====-*/}
    <div className="container  bg-white shadow-xl">
      <div className="">
        <div className="bg-white my-6">
          <table className="text-left w-full border-collapse">
            {" "}
            {/*Border collapse doesn't work on this site yet but it's available in newer tailwind versions */}
            <thead>
              <tr>
                <th className="py-4 px-6 bg-blue-gray-200 font-bold uppercase text-sm text-white border-b border-grey-light">
                  KEYWORDS
                </th>
                <th className="py-4 px-6 text-center bg-blue-gray-200 font-bold uppercase text-sm text-white border-b border-grey-light">
                  TOTAL ENTERIES
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">Bible</td>
                <td className="py-4 px-6 text-center border-b border-grey-light">
                  11980
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">Blah</td>
                <td className="py-4 px-6 text-center border-b border-grey-light">
                  340
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">Blah</td>
                <td className="py-4 px-6 text-center border-b border-grey-light">
                  901
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">Blah</td>
                <td className="py-4 px-6 text-center border-b border-grey-light">
                  11950
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">Blah</td>
                <td className="py-4 px-6 text-center border-b border-grey-light">
                  459
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/*==== frist div ends here ====-*/}
    {/*==== Second div begins here ====-*/}
    <div className="container  bg-white shadow-xl">
      <div className="">
        <div className="bg-white my-6">
          <table className="text-left w-full border-collapse">
            {" "}
            {/*Border collapse doesn't work on this site yet but it's available in newer tailwind versions */}
            <thead>
              <tr>
                <th className="py-4 px-6 bg-blue-gray-200 font-bold uppercase text-sm text-white border-b border-grey-light">
                  MSISDN
                </th>
                <th className="py-4 px-6 text-center bg-blue-gray-200 font-bold uppercase text-sm text-white border-b border-grey-light">
                  ENTRIES
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">
                  26809304030
                </td>
                <td className="py-4 px-6 text-center border-b border-grey-light">
                  495,455
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">
                  26809304030
                </td>
                <td className="py-4 px-6 text-center border-b border-grey-light">
                  495,455
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">
                  26809304030
                </td>
                <td className="py-4 px-6 text-center border-b border-grey-light">
                  495,455
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">
                  26809304030
                </td>
                <td className="py-4 px-6 text-center border-b border-grey-light">
                  32,333
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">
                  26809304030
                </td>
                <td className="py-4 px-6 text-center border-b border-grey-light">
                  31,199
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/*==== Second div ends here ====-*/}
    {/*==== Third div begins here ====-*/}
    <div className="container bg-white shadow-xl">
      <div className="">
        <div className="bg-white my-6">
          <table className="text-left w-full border-collapse">
            {" "}
            {/*Border collapse doesn't work on this site yet but it's available in newer tailwind versions */}
            <thead>
              <tr>
                <th className="py-4 px-6 bg-blue-gray-200 font-bold uppercase text-sm text-white border-b border-grey-light">
                  MSISDN
                </th>
                <th className="py-4 px-6 text-center bg-blue-gray-200 font-bold uppercase text-sm text-white border-b border-grey-light">
                  POINTS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">
                  28679609009
                </td>
                <td className="py-4 text-center px-6 border-b border-grey-light">
                  11,290
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">
                  28679609009
                </td>
                <td className="py-4 text-center px-6 border-b border-grey-light">
                  9,230
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">
                  28679609009
                </td>
                <td className="py-4 px-6 text-center border-b border-grey-light">
                  234
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">
                  28679609009
                </td>
                <td className="py-4 px-6 text-center border-b border-grey-light">
                  56,230
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">
                  28679609009
                </td>
                <td className="py-4 px-6 text-center border-b border-grey-light">
                  323
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/*==== Third div ends here ====-*/}
  </div>
</>
  )
}

export default Stat