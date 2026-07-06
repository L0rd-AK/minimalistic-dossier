import React from 'react';
import Spinner from '../3DSpiner/Spinner';
import { updatesData } from '../data/updatesData';

function Update() {
  const updates = updatesData;

  return (
    <div className="p-4 sm:p-8 bg-gray-50 shadow-sm rounded-lg">
      <h1 className="text-xl font-bold uppercase mb-4 text-red-500 border-b border-gray-300 pb-2 flex gap-2 items-center relative">
        Recent Updates
        <span className='absolute left-[142px] mb-6'>
          <Spinner className="inline" />
        </span>
      </h1>
      <ul className="space-y-4">
        {updates.map((update, index) => (
          <li key={index} className="hover:bg-blue-50 p-2 rounded-md transition-colors">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <span className="font-bold text-blue-600 mb-1 sm:mb-0">{update.title}</span>
              <span className="text-purple-600 italic rounded font-medium">{update.date}</span>
            </div>
            <p className="text-gray-700 mt-1">{update?.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Update;