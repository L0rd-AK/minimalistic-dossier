import React from 'react';
import Spinner from '../3DSpiner/Spinner';

function Update() {
const updates = [
    {
        title: "Working on a React project",
        date: "[03/2025]",
        description: "Building a responsive resume website using React and Tailwind CSS.",
    },
    {
        title:"Learning React Native",
        date: "[02/2025]",
        description: "Currently learning React Native to build mobile applications for both Android and iOS.",
    },
    {
        title: "Reached Pupil on Codeforces",
        date: "[25/02/2025]",
        description: (
            <>
                Just reached pupil. Working on improving problem-solving skills.{" "}MAX rating:
                <span className="text-red-600 font-medium">1215</span>.
            </>
        ),
    },
    {
        title: "Reached 2 Star on Codechef",
        date: "[27/11/2024]",
        description: (
            <>
                Reached 2 ⭐ on Codechef.{" "}MAX rating: 
                <span className="text-red-600 font-medium">1559</span>.
                Country rank: <span className="text-red-600 font-medium">860</span>.
            </>
        ),
    },
];

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
              <span className="text-purple-600 italic px-2 rounded font-medium sm:ml-2">{update.date}</span>
            </div>
            <p className="text-gray-700 mt-1">{update?.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Update;