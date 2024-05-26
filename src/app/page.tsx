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
      <h2 className="font-bold text-3xl">Cylinder Stock</h2>
      <div>
        {Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <h3>{key}</h3>
            <p>Threshold: {value.threshold}</p>
            <p>Reorder Point: {value.reorderPoint}</p>
            <p>On Hand: {value.onHand}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
