import { Helmet } from "react-helmet-async";

function WorkExperience() {
  const experiences = [
    {
      company: "CSL Software Resources Ltd.",
      role: "Trainee Programmer",
      period: "[22/02/2026 - Present]",
      details: "Joined on 22 February, 2026 and currently working.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Amit - Work Experience</title>
        <meta
          name="description"
          content="This page highlights Amit Kumar Ghosh's professional work experience, including his current role as a Trainee Programmer at CSL Software Resources Ltd."
        />
        <meta property="og:title" content="Amit Kumar Ghosh | Work Experience" />
        <meta
          property="og:description"
          content="This page highlights Amit Kumar Ghosh's professional work experience, including his current role as a Trainee Programmer at CSL Software Resources Ltd."
        />
        <link rel="canonical" href="https://amitkumarghosh.vercel.app/work-experience" />
      </Helmet>

      <div className="p-4 sm:p-8 bg-gray-50 shadow-sm rounded-lg">
        <h1 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">
          Work Experience
        </h1>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="p-4 hover:bg-blue-50 rounded-md transition-colors grid grid-cols-1 items-center justify-between md:grid-cols-3 gap-4"
            >
              <div className="md:col-span-2">
                <h3 className="font-bold text-blue-600">{experience.role}</h3>
                <p className="text-gray-700">{experience.company}</p>
                <p className="text-gray-700">{experience.details}</p>
              </div>

              <div className="flex items-center justify-start md:justify-end">
                <p className="text-purple-600 italic">{experience.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
