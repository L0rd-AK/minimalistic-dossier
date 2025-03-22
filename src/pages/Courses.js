function Courses() {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-gray-50 shadow-sm rounded-lg">
      <h2 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">Courses</h2>
      <ul className="space-y-4">
        <li>
          <div className="flex justify-between">
            <span className="font-bold text-blue-600">Learn C++ Programming - Beginner to Advance - Deep Dive in C++</span>
            <span className="text-gray-600 italic">06/2022</span>
          </div>
          <p className="text-gray-700 ml-4">Udemy course by <span className="text-gray-800">Abdul Bari</span></p>
        </li>
        <li>
          <div className="flex justify-between">
            <span className="font-bold text-blue-600">Graphic Design</span>
            <span className="text-gray-600 italic">02/2023</span>
          </div>
          <p className="text-gray-700 ml-4">Online course by <span className="text-gray-800">Shahadat Saykot</span></p>
        </li>
        <li>
          <div className="flex justify-between">
            <span className="font-bold text-blue-600">Complete Web Development Course With Jhankar Mahbub</span>
            <span className="text-gray-600 italic">6/2023</span>
          </div>
          <p className="text-gray-700 ml-4">Online course by <span className="text-gray-800">Jhankar Mahbub</span></p>
        </li>
      </ul>
    </div>
  );
}

export default Courses;