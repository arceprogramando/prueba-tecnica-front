'use client';

import { useEffect, useState } from 'react';
import { fetchData } from './lib/data';
import Image from 'next/image';

interface GasData {
  threshold: number;
  reorderPoint: number;
  onHand: number;
}

interface Data {
  [key: string]: GasData;
}

const Page: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      const keys = Object.keys(fetchedData).slice(0, 10);
      const newData: Data = {};
      keys.forEach(key => {
        newData[key] = fetchedData[key];
      });
      setData(newData);
    };

    getData();
  }, []);


  if (!data) return <div>Loading...</div>;

  return (
    <div className="mx-auto">
      <div>
        <h2 className="font-bold text-3xl my-4">Cylinder Stock</h2>
        <p className="text-[#929A9D] mb-4">Showing 1-20 of 40 results</p>
        <label className="block w-full my-6">
          <div className="flex items-center bg-[#F1F2F6] border rounded shadow-md ">
            <div className="pl-4">
              <Image src="/lupa.svg" height={16} width={16} alt={'logo'} />
            </div>
            <input type="text" className="flex-grow bg-transparent py-2 pl-2 focus:outline-none" placeholder=" Search for a cylinder type" />
          </div>
        </label>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg mb-2">
        <table className="md:w-full table-auto border-collapse rounded ">
          <thead>
            <tr>
              <th className="pl-4 text-start py-2 border-b-2 border-t-2 border-l-2">Cylinder Type</th>
              <th className="pr-4 py-2 border-b-2 border-t-2 text-start">Threshold</th>
              <th className="pr-4 py-2 border-b-2 border-t-2 text-start">Reorder Point</th>
              <th className="pr-4 py-2 border-b-2 border-t-2 text-start ">On Hand</th>
              <th className="pr-4 py-2 border-b-2 border-t-2 border-r-2"></th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([key, value], index) => (
              <tr key={key}>
                <td className="px-4 py-4 border-b border-l-2">{key}</td>
                <td className="py-4 border-b text-[#AEB5BB]">{value.threshold}</td>
                <td className="py-4 border-b text-[#AEB5BB]">{value.reorderPoint}</td>
                <td className="py-4 border-b text-[#AEB5BB]">{value.onHand}</td>
                <td className="py-4 border-b border-r-2 text-[#8B9093] text-medium font-semibold text-center">Edit Threshold</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
