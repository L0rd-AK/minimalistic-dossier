function Contests() {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-gray-50 shadow-sm rounded-lg">
      <h2 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">Contests</h2>
      <ul className="space-y-4">
        <li className="hover:bg-blue-50 p-2 rounded-md transition-colors ">
          <div className="flex justify-between">
            <span className="font-bold text-blue-600">DIU FALL TAKEOFF Programming contest</span>
            <span className="text-purple-600 italic px-2 rounded font-medium">[ 2022 ]</span>
          </div>
        </li>
        <li className="hover:bg-blue-50 p-2 rounded-md transition-colors ">
          <div className="flex justify-between">
            <span className="font-bold text-blue-600">DIU Spring TAKEOFF Programming contest</span>
            <span className="text-purple-600 italic px-2 rounded font-medium">[ 2023 ]</span>
          </div>
        </li>
        <li className="hover:bg-blue-50 p-2 rounded-md transition-colors ">
          <div className="flex justify-between">
            <span className="font-bold text-blue-600">Regularly Attend Online CP Contest on Codeforces, Codechef, Atcoder</span>
            <span className="text-purple-600 italic px-2 rounded font-medium">[ 2023 ]</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Contests;