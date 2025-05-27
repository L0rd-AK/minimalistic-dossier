import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
// import AnimatedLetters from "../AnimatedLetters";

function Courses() {
  const [showCertificate, setShowCertificate] = useState(null); 
  // const [letterClass, setLetterClass] = useState("text-animate-hover");
  // const certificate =["C", "e", "r", "t", "i", "f", "i", "c", "a", "t", "e"];
  const courses = [
    {
      title:"Dean's List Award for Academic Excellence",
      date: "[Fall-2023]",
      platform: "Academic",
      instructor: "Daffodil International University",
      certificateImage: "https://i.ibb.co.com/CpWv3sB3/Deans-list-Award.jpg",
    },
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
      certificateImage: "https://i.ibb.co.com/JWfxL58B/Ghapic-saykot.jpg",
      platform: "Online",
    },
    {
      title: "Complete Web Development Course With Jhankar Mahbub",
      date: "[06/2023]",
      certificateImage: "https://i.ibb.co/wh2VRXTw/Programming-hero-certificate.jpg", 
      instructor: "Jhankar Mahbub",
      platform: "Online",
    },
    {
      title: "Datathon Programming Contest",
      date: "[07/2024]",
      instructor: "Daffodil International University",
      platform: "Academic",
      certificateImage: "https://i.ibb.co/bj1CvkYM/certificate.png",
    },
    {
      title:"Communication Foundations",
      date: "[14/02/2024]",
      instructor: "LinkedIn Learning",
      platform: "Online",
      certificateImage: "https://i.ibb.co.com/Pz4wZbzQ/Certificate-Of-Completion-Communication-Foundations-2018.jpg",
    },
    {
      title:"Communication Secrets",
      date: "[15/02/2024]",
      instructor: "10 Minute School",
      platform: "Online",
      certificateImage: "https://i.ibb.co.com/wZv2jB7W/a-FREE-online-course-offered-by-10-Minute-School.jpg",
    },
  ];

  const handleCertificateClick = (index) => {
    setShowCertificate(index); 
  };

  const closeModal = () => {
    setShowCertificate(null); 
  };

  return (
    <>
      <Helmet>
        <title>Amit - Courses</title>
        <meta
          name="description"
          content="This page highlights Amit Kumar Ghosh's participation in various courses, including Learn C++ Programming - Beginner to Advance - Deep Dive in C++, Graphic Design, and Complete Web Development Course With Jhankar Mahbub. The page is designed with a responsive layout, ensuring a clean and interactive user experience."
        />
        <meta property="og:title" content="Amit Kumar Ghosh | Courses" />
        <meta
          property="og:description"
          content="This page highlights Amit Kumar Ghosh's participation in various courses, including Learn C++ Programming - Beginner to Advance - Deep Dive in C++, Graphic Design, and Complete Web Development Course With Jhankar Mahbub. The page is designed with a responsive layout, ensuring a clean and interactive user experience."
        />
        <link rel="canonical" href="https://amitkumarghosh.vercel.app/courses" />
      </Helmet>
      
      <div className="p-4 sm:p-8 bg-gray-50 shadow-sm rounded-lg">
        <h1 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">
          achievements and Courses
        </h1>
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
                <span className="text-purple-600 font-medium italic px-0 md:px-2 rounded ml-0 md:ml-2 flex items-center">
                  {course.date}
                  {course?.certificateImage && (
                    <button
                      onClick={() => handleCertificateClick(index)}
                      className="ml-2 text-purple-600 hover:text-purple-700 italic"
                    >
                      [View Certificate]
                    </button>
                  )}
                </span>
              </div>
              <p className="text-gray-700 ml-0 mt-1">
                {course.platform} course by{" "}
                <span className="text-blue-800 font-medium">
                  {course.instructor}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal for Certificate */}
      {showCertificate !== null && courses[showCertificate]?.certificateImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <img
              src={courses[showCertificate].certificateImage}
              alt={`${courses[showCertificate].title} Certificate`}
              className="w-full rounded"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Courses;