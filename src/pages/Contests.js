function Contests() {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold uppercase mb-4">Contests</h2>
        <ul className="list-disc ml-5 space-y-2">
          <li className="flex justify-between">
            <span className="font-bold">DIU FALL TAKEOFF Programming contest</span>
            <span>2022</span>
          </li>
          <li className="flex justify-between">
            <span className="font-bold">DIU Spring TAKEOFF Programming contest</span>
            <span>2023</span>
          </li>
          <li className="flex justify-between">
            <span className="font-bold">Regularly Attend Online CP Contest on Codeforces, Codechef, Atcoder</span>
            <span>2023</span>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Contests;