// Courses / achievements list.
// To add a new entry, append an object to this array. Fields:
//   title            - course / achievement name (string, required)
//   date             - date label shown in brackets, e.g. "[06/2022]"
//   platform         - platform / type, e.g. "Udemy", "Online", "Academic"
//   instructor       - instructor or issuing organization (string)
//   certificateImage - optional image URL; if present a [View Certificate] button opens it in a modal
// Array order = display order.

export const coursesData = [
  {
    title: "EF SET Certificate",
    date: "[04/04/2026]",
    platform: "Online",
    certificateImage: "https://cert.efset.org/MioTEi",
  },
  {
    title: "Dean's List Award for Academic Excellence",
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
    title: "Communication Foundations",
    date: "[14/02/2024]",
    instructor: "LinkedIn Learning",
    platform: "Online",
    certificateImage: "https://i.ibb.co.com/Pz4wZbzQ/Certificate-Of-Completion-Communication-Foundations-2018.jpg",
  },
  {
    title: "Communication Secrets",
    date: "[15/02/2024]",
    instructor: "10 Minute School",
    platform: "Online",
    certificateImage: "https://i.ibb.co.com/wZv2jB7W/a-FREE-online-course-offered-by-10-Minute-School.jpg",
  },
];
