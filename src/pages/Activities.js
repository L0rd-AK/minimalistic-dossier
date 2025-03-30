import { Helmet } from "react-helmet-async";

function Activities() {
  const activities = [
    {
      title: "Associate Member",
      description: "DIU Computer & Programming Club",
      date: "[08/2022 – present]",
    },
    {
      title: "Web Developer",
      description:
        "I am a Web Developer Specialized in MERN Stack. Check out my projects on Projects page.",
      date: "[01/2023 – present]",
    },
    {
      title: "Competitive Programmer",
      description: "Solved 1500+ Problems in various online judges",
      date: "[12/2021 – present]",
      links: [
        { href: "https://leetcode.com/u/Lord-AK", label: "LeetCode", solved: "82" },
        { href: "https://codeforces.com/profile/Lord_AK", label: "Codeforces", solved: "764" },
        { href: "https://judge.beecrowd.com/en/profile/633824", label: "Beecrowd", solved: "238" },
        { href: "https://www.codechef.com/users/l0rd", label: "CodeChef", solved: "110" },
        { href: "https://lightoj.com/user/lord-ak", label: "LightOJ", solved: "33" },
        { href: "https://uhunt.onlinejudge.org/id/1304273", label: "UVA", solved: "31" },
        { href: "https://kenkoooo.com/atcoder#/user/lord_AK", label: "AtCoder", solved: "47" },
      ],
    },
    {
      title: "Languages",
      description: [
        { text: "English", proficiency: "Full Professional proficiency" },
        { text: "Bangla", proficiency: "Native speaker" },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Amit Kumar Ghosh - Activities</title>
        <meta
          name="description"
          content="This page highlights Amit Kumar Ghosh's Extra-Curricular Activities. It actively showcases his role as an associate member of the DIU Computer & Programming Club, his achievement of solving over 1500 competitive programming problems on platforms like LeetCode, Codeforces, and CodeChef, and his language proficiencies in English and Bangla. The page is designed with a responsive layout, ensuring a clean and interactive user experience."
        />
        <meta property="og:title" content="Amit Kumar Ghosh | Activities" />
        <meta
          property="og:description"
          content="This page highlights Amit Kumar Ghosh's Extra-Curricular Activities. It actively showcases his role as an associate member of the DIU Computer & Programming Club, his achievement of solving over 1500 competitive programming problems on platforms like LeetCode, Codeforces, and CodeChef, and his language proficiencies in English and Bangla. The page is designed with a responsive layout, ensuring a clean and interactive user experience."
        />
        <link rel="canonical" href="https://amitkumarghosh.vercel.app/activities" />
      </Helmet>

      <div className="p-4 sm:p-8 bg-gray-50 shadow-sm rounded-lg">
        <h1 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">
          Extra-Curricular Activities
        </h1>

        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="p-4 hover:bg-blue-50 rounded-md transition-colors grid grid-cols-1 items-center justify-between md:grid-cols-3 gap-4"
            >
              <div className="grid grid-cols-1 md:col-span-2 gap-2">
                <h3 className="font-bold text-blue-600">{activity.title}</h3>

                {Array.isArray(activity.description) ? (
                  <ul className="list-disc ml-4 sm:ml-7">
                    {activity.description.map((item, idx) => (
                      <li key={idx} className="text-gray-700">
                        {item.text}:{" "}
                        <span className="text-gray-800 font-medium">
                          {item.proficiency}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">{activity.description}</p>
                )}

                {activity.links && (
                  <div className="ml-2 sm:ml-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {activity.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow bg-white hover:bg-blue-50"
                      >
                        <div className="text-blue-600 font-bold">{link.label}</div>
                        <div className="text-gray-600 text-sm">
                          Solved: <span className="text-green-600">{link.solved}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <div>
                {activity.date && (
                  <div className="flex items-center justify-start md:justify-end">
                    <p className="text-purple-600 italic">{activity.date}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Activities;
