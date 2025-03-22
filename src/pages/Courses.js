function Courses() {
  return (
    <div className="p-4 sm:p-8 max-w-4xl mx-auto bg-gray-50 shadow-sm rounded-lg">
      <h2 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">Courses</h2>
      <ul className="space-y-4">
        <li className="hover:bg-blue-50 p-2 rounded-md transition-colors">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <span className="font-bold text-blue-600 mb-1 sm:mb-0">Learn C++ Programming - Beginner to Advance - Deep Dive in C++</span>
            <span className="text-purple-600 font-medium italic px-2 rounded sm:ml-2">[06/2022]</span>
          </div>
          <p className="text-gray-700 ml-0 sm:ml-4 mt-1">Udemy course by <span className="text-blue-800 font-medium">Abdul Bari</span></p>
        </li>
        <li className="hover:bg-blue-50 p-2 rounded-md transition-colors">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <span className="font-bold text-blue-600 mb-1 sm:mb-0">Graphic Design</span>
            <span className="text-purple-600 font-medium italic px-2 rounded sm:ml-2">[02/2023]</span>
          </div>
          <p className="text-gray-700 ml-0 sm:ml-4 mt-1">Online course by <span className="text-blue-800 font-medium">Shahadat Saykot</span></p>
        </li>
        <li className="hover:bg-blue-50 p-2 rounded-md transition-colors">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <span className="font-bold text-blue-600 mb-1 sm:mb-0">Complete Web Development Course With Jhankar Mahbub</span>
            <span className="text-purple-600 font-medium italic px-2 rounded sm:ml-2">[06/2023]</span>
          </div>
          <p className="text-gray-700 ml-0 sm:ml-4 mt-1">Online course by <span className="text-blue-800 font-medium">Jhankar Mahbub</span></p>
        </li>
      </ul>
    </div>
  );
}

export default Courses;