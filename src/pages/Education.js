function Education() {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-gray-50 shadow-sm rounded-lg">
      <h2 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">Education Background</h2>
      <div className="space-y-6">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-blue-600">B.Sc. in Computer Science and Engineering</h3>
            <p className="text-gray-700">Daffodil International University</p>
            <p className="text-gray-700">CGPA: <span className="font-medium text-green-600">3.80</span> out of 4.00</p>
          </div>
          <p className="text-purple-600 font-medium italic">[01/2022 – Present]</p>
        </div>
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-blue-600">Higher Secondary Certificate (H.S.C.)</h3>
            <p className="text-gray-700">Sirajganj Government College, Sirajganj</p>
            <p className="text-gray-700">Background: Science</p>
            <p className="text-gray-700">GPA: <span className="font-medium text-green-600">4.67</span> out of 5.00</p>
          </div>
          <p className="text-purple-600 font-medium italic">[01/2017 – 03/2019]</p>
        </div>
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-blue-600">Secondary School Certificate (S.S.C.)</h3>
            <p className="text-gray-700">Jahan-Ara High School, Sirajganj</p>
            <p className="text-gray-700">Background: Science</p>
            <p className="text-gray-700">GPA: <span className="font-medium text-green-600">5.00</span> out of 5.00</p>
          </div>
          <p className="text-purple-600 font-medium italic">[02/2014 – 11/2016]</p>
        </div>
      </div>
    </div>
  );
}

export default Education;