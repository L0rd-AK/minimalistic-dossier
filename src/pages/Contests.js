import { Helmet } from "react-helmet-async";

function Contests() {
  const contests = [
    {
      title: "DIU FALL TAKEOFF Programming contest",
      year: "[2022]",
    },
    {
      title: "DIU Spring TAKEOFF Programming contest",
      year: "[2023]",
    },
    {
      title:
        "Regularly Attend Online CP Contest on Codeforces, Codechef, Atcoder",
      year: "[2023]",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contests</title>
        <meta
          name="Amit Kumar Ghosh | Contests"
          content="This is my Contests page."
        />
        <meta
          property="og:Contests"
          content="This page contains details about the Contests, Amit Kumar Ghosh has participated in."
        />
        <meta
          property="og:description"
          content="This page highlights Amit Kumar Ghosh's participation in various programming contests, including the DIU FALL TAKEOFF Programming contest, DIU Spring TAKEOFF Programming contest, and regular attendance at online CP contests on platforms like Codeforces, Codechef, and Atcoder. The page is designed with a responsive layout, ensuring a clean and interactive user experience."
        />
        <link rel="canonical" href="/contests" />
      </Helmet>
      <div className="p-4 sm:p-8 max-w-4xl mx-auto bg-gray-50 shadow-sm rounded-lg">
        <h2 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">
          Contests
        </h2>
        <ul className="space-y-4">
          {contests.map((contest, index) => (
            <li
              key={index}
              className="hover:bg-blue-50 p-2 rounded-md transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-bold text-blue-600 mb-1 sm:mb-0">
                  {contest.title}
                </span>
                <span className="text-purple-600 italic px-2 rounded font-medium sm:ml-2">
                  {contest.year}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Contests;
