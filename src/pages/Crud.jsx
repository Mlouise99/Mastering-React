import React, { useState, useEffect } from 'react';

const Crud = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.restful-api.dev/objects');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Object Data</h1>
      <div className=" pr-40 pl-40 ">
        <table className="min-w-full bg-white ">
          <thead className="bg-gray-300 text-black">
            <tr>
              <th className="px-6 py-3  text-xs font-medium uppercase  border-r border-gray-600">ID</th>
              <th className="px-6 py-3 text-xs font-medium uppercase  border-r border-gray-600">Name</th>
              <th className="px-6 py-3 text-xs font-medium uppercase r">Data</th>
            </tr>
          </thead>
          <tbody className="bg-gray-50 divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4  border-r border-gray-400">{item.id}</td>
                <td className="px-6 py-4 border-r border-gray-400">{item.name}</td>
                <td className="px-6 py-4 ">
                  <ul>
                    {item.data ? (
                      Object.entries(item.data).map(([key, value]) => (
                        <li key={key}>
                          <span className="font-medium">{key}:</span> {value}
                        </li>
                      ))
                    ) : (
                      <li>No additional data</li>
                    )}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Crud;
