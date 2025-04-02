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
        <title>Amit Kumar Ghosh - Contests</title>
        <meta
          name="description"
          content="This page highlights Amit Kumar Ghosh's participation in various programming contests, including the DIU FALL TAKEOFF Programming contest, DIU Spring TAKEOFF Programming contest, and regular attendance at online CP contests on platforms like Codeforces, Codechef, and Atcoder. The page is designed with a responsive layout, ensuring a clean and interactive user experience."
        />
        <meta
          property="og:title"
          content="Amit Kumar Ghosh | Contests"
        />
        <meta
          property="og:description"
          content="This page highlights Amit Kumar Ghosh's participation in various programming contests, including the DIU FALL TAKEOFF Programming contest, DIU Spring TAKEOFF Programming contest, and regular attendance at online CP contests on platforms like Codeforces, Codechef, and Atcoder. The page is designed with a responsive layout, ensuring a clean and interactive user experience."
        />
        <link rel="canonical" href="https://amitkumarghosh.vercel.app/contests" />
      </Helmet>
      <div className="p-4 sm:p-8   bg-gray-50 shadow-sm rounded-lg">
        <h1 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">
          Contests
        </h1>
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
                <span className="text-purple-600 italic rounded font-medium">
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
