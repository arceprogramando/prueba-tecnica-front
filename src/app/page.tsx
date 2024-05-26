'use client';

import { useEffect, useState } from 'react';
import { fetchData } from './lib/data';

interface GasData {
  threshold: number;
  reorderPoint: number;
  onHand: number;
}

interface Data {
  [key: string]: GasData;
}

const Home: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };

    getData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="font-bold text-3xl p-4">Cylinder Stock</h2>
      <table className="min-w-full table-auto border-collapse ">
        <thead>
          <tr className=" rounded-lg">
            <th className="px-4 py-2 border-b-2 border-t-2 border-l-2">Cylinder Type</th>
            <th className="px-4 py-2 border-b-2 border-t-2">Threshold</th>
            <th className="px-4 py-2 border-b-2 border-t-2">Reorder Point</th>
            <th className="px-4 py-2 border-b-2 border-t-2 ">On Hand</th>
            <th className="px-4 py-2 border-b-2 border-t-2 border-r-2"></th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value], index) => (
            <tr key={key}>
              <td className="px-4 py-4 border-b border-l-2">{key}</td>
              <td className="px-4 py-4 border-b text-[#AEB5BB]">{value.threshold}</td>
              <td className="px-4 py-4 border-b text-[#AEB5BB]">{value.reorderPoint}</td>
              <td className="px-4 py-4 border-b text-[#AEB5BB]">{value.onHand}</td>
              <td className="px-4 py-4 border-b border-r-2 text-[#8B9093] text-medium font-semibold">Edit Threshold</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
