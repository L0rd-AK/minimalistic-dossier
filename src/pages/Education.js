import { Helmet } from "react-helmet-async";

function Education() {
  return (
    <>
      <Helmet>
        <title>Amit Kumar Ghosh - Education</title>
        <meta
          name="description"
          content="This page highlights Amit Kumar Ghosh's Education details, including his B.Sc. in Computer Science and Engineering from Daffodil International University, his Higher Secondary Certificate (H.S.C.) from Sirajganj Government College, Sirajganj, and his Secondary School Certificate (S.S.C.) from Jahan-Ara High School, Sirajganj. The page is designed with a responsive layout, ensuring a clean and interactive user experience"
        />
        <meta
          property="og:title"
          content="Amit Kumar Ghosh | Education"
        />
        <meta
          property="og:description"
          content="This page highlights Amit Kumar Ghosh's Education details, including his B.Sc. in Computer Science and Engineering from Daffodil International University, his Higher Secondary Certificate (H.S.C.) from Sirajganj Government College, Sirajganj, and his Secondary School Certificate (S.S.C.) from Jahan-Ara High School, Sirajganj. The page is designed with a responsive layout, ensuring a clean and interactive user experience."
        />
        <link rel="canonical" href="https://amitkumarghosh.vercel.app/education" />
      </Helmet>
      <div className="p-4 sm:p-8 max-w-4xl mx-auto bg-gray-50 shadow-sm rounded-lg">
        <h2 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">
          Education Background
        </h2>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div className="mb-2 sm:mb-0">
              <h3 className="font-bold text-blue-600">
                B.Sc. in Computer Science and Engineering
              </h3>
              <p className="text-gray-700">Daffodil International University</p>
              <p className="text-gray-700">
                CGPA: <span className="font-medium text-green-600">3.80</span>{" "}
                out of 4.00
              </p>
            </div>
            <p className="text-purple-600 font-medium italic sm:text-right">
              [01/2022 – Present]
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div className="mb-2 sm:mb-0">
              <h3 className="font-bold text-blue-600">
                Higher Secondary Certificate (H.S.C.)
              </h3>
              <p className="text-gray-700">
                Sirajganj Government College, Sirajganj
              </p>
              <p className="text-gray-700">Background: Science</p>
              <p className="text-gray-700">
                GPA: <span className="font-medium text-green-600">4.67</span>{" "}
                out of 5.00
              </p>
            </div>
            <p className="text-purple-600 font-medium italic sm:text-right">
              [01/2017 – 03/2019]
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div className="mb-2 sm:mb-0">
              <h3 className="font-bold text-blue-600">
                Secondary School Certificate (S.S.C.)
              </h3>
              <p className="text-gray-700">Jahan-Ara High School, Sirajganj</p>
              <p className="text-gray-700">Background: Science</p>
              <p className="text-gray-700">
                GPA: <span className="font-medium text-green-600">5.00</span>{" "}
                out of 5.00
              </p>
            </div>
            <p className="text-purple-600 font-medium italic sm:text-right">
              [02/2014 – 11/2016]
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
