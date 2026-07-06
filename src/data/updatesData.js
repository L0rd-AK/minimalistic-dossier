import React from "react";

// Recent updates list.
// To add a new update, append an object to this array. Fields:
//   title       - update headline (string, required)
//   date        - date label shown in brackets, e.g. "[10/2025]"
//   description - string OR inline JSX (React elements) — note this file is .js and imports React
//                 so JSX in description works; keep the React import above.
// Array order = display order (first item shows first).

export const updatesData = [
  {
    title: "8 of my Research Papers got accepted in Conferences",
    date: "[10/2025]",
    description: "My 8 research papers on various topics got accepted in reputed conferences, marking a significant milestone in my academic journey.",
  },
  {
    title: "Reached Pupil on Codeforces",
    date: "[25/02/2025]",
    description: (
      <>
        Just reached pupil. Working on improving problem-solving skills.{" "}MAX rating:
        <span className="text-red-600 font-medium">1215</span>.
      </>
    ),
  },
  {
    title: "Reached 2 Star on Codechef",
    date: "[27/11/2024]",
    description: (
      <>
        Reached 2 ⭐ on Codechef.{" "}MAX rating:
        <span className="text-red-600 font-medium">1559</span>.
        Country rank: <span className="text-red-600 font-medium">860</span>.
      </>
    ),
  },
  {
    title: "Learning postgreSQL",
    date: "[20/05/2025]",
    description: "Currently learning postgreSQL to enhance database management skills.",
  },
];
