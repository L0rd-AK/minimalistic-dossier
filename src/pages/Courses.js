import { Helmet } from "react-helmet-async";

function Courses() {
  const courses = [
    {
      title: "Learn C++ Programming - Beginner to Advance - Deep Dive in C++",
      date: "[06/2022]",
      instructor: "Abdul Bari",
      platform: "Udemy",
    },
    {
      title: "Graphic Design",
      date: "[02/2023]",
      instructor: "Shahadat Saykot",
      platform: "Online",
    },
    {
      title: "Complete Web Development Course With Jhankar Mahbub",
      date: "[06/2023]",
      instructor: "Jhankar Mahbub",
      platform: "Online",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Amit Kumar Ghosh - Courses</title>
        <meta
          name="description"
          content="This page highlights Amit Kumar Ghosh's participation in various courses, including Learn C++ Programming - Beginner to Advance - Deep Dive in C++, Graphic Design, and Complete Web Development Course With Jhankar Mahbub. The page is designed with a responsive layout, ensuring a clean and interactive user experience."
        />
        <meta
          property="og:title"
          content="Amit Kumar Ghosh | Courses"
        />
        <meta
          property="og:description"
          content="This page highlights Amit Kumar Ghosh's participation in various courses, including Learn C++ Programming - Beginner to Advance - Deep Dive in C++, Graphic Design, and Complete Web Development Course With Jhankar Mahbub. The page is designed with a responsive layout, ensuring a clean and interactive user experience."
        />
        <link rel="canonical" href="https://amitkumarghosh.vercel.app/courses" />
      </Helmet>
      <div className="p-4 sm:p-8   bg-gray-50 shadow-sm rounded-lg">
        <h2 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">
          Courses
        </h2>
        <ul className="space-y-4">
          {courses.map((course, index) => (
            <li
              key={index}
              className="hover:bg-blue-50 p-2 rounded-md transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="font-bold text-blue-600 mb-1 sm:mb-0">
                  {course.title}
                </span>
                <span className="text-purple-600 font-medium italic px-2 rounded sm:ml-2">
                  {course.date}
                </span>
              </div>
              <p className="text-gray-700 ml-0 sm:ml-4 mt-1">
                {course.platform} course by{" "}
                <span className="text-blue-800 font-medium">
                  {course.instructor}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Courses;
