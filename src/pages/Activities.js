function Activities() {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-gray-50 shadow-sm rounded-lg">
      <h2 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">Extra-Curricular Activities</h2>
      <div className="space-y-6">
        <div className="p-2 hover:bg-blue-50 rounded-md transition-colors flex justify-between">
          <div>
            <h3 className="font-bold text-blue-600">Associate Member</h3>
            <p className="text-gray-700 ml-2">DIU Computer & Programming Club</p>
          </div>
            <p className="text-purple-600 italic ml-2">[08/2022 – present]</p>
        </div>
        <div className="p-2 hover:bg-blue-50 rounded-md transition-colors">
          <h3 className="font-bold text-blue-600">Competitive Programmer</h3>
          <p className="text-gray-700 ml-2">Solved 1500+ Problems in various online judges</p>
          <p className="text-gray-700 ml-2">Profile-Links:</p>
          <ol className="list-decimal ml-7 flex gap-2">
            <a href="https://leetcode.com/u/Lord-AK" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">[<span className="text-red-600">LeetCode</span>]</a>
            <a href="https://codeforces.com/profile/Lord_AK" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">[<span className="text-red-600">Codeforces</span>]</a>
            <a href="https://judge.beecrowd.com/en/profile/633824" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">[<span className="text-red-600">Beecrowd</span>]</a>
            <a href="https://www.codechef.com/users/l0rd" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">[<span className="text-red-600">CodeChef</span>]</a>
          </ol>
        </div>
        <div className="p-2 hover:bg-blue-50 rounded-md transition-colors">
          <h3 className="font-bold text-blue-600">Languages</h3>
          <ul className="list-disc ml-7">
            <li className="text-gray-700">English: <span className="text-gray-800 font-medium">Full Professional proficiency</span></li>
            <li className="text-gray-700">Bangla: <span className="text-gray-800 font-medium">Native speaker</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Activities;