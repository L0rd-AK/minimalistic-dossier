import { Helmet } from "react-helmet-async";
import { publicationsData, HIGHLIGHT_AUTHOR } from "../data/publicationsData";

// Bold the author segments that contain HIGHLIGHT_AUTHOR (e.g. "Ghosh").
function renderAuthors(authors) {
  return authors.split(", ").map((part, i, arr) => (
    <span key={i}>
      {part.includes(HIGHLIGHT_AUTHOR) ? (
        <strong className="text-gray-900">{part}</strong>
      ) : (
        part
      )}
      {i < arr.length - 1 ? ", " : ""}
    </span>
  ));
}

function Publications() {
  // Newest first; original order preserved within the same year.
  const publications = [...publicationsData].sort((a, b) => b.year - a.year);

  return (
    <>
      <Helmet>
        <title>Amit - Publications</title>
        <meta
          name="description"
          content="Peer-reviewed research publications by Amit Kumar Ghosh in machine learning, deep learning, and computer vision, published in IEEE conferences and Advances in Intelligent Systems Research."
        />
        <meta property="og:title" content="Amit Kumar Ghosh | Publications" />
        <meta
          property="og:description"
          content="Peer-reviewed research publications by Amit Kumar Ghosh in machine learning, deep learning, and computer vision, published in IEEE conferences and Advances in Intelligent Systems Research."
        />
        <link
          rel="canonical"
          href="https://amitkumarghosh.vercel.app/publications"
        />
      </Helmet>

      <div className="p-4 sm:p-8 bg-gray-50 shadow-sm rounded-lg">
        <h1 className="text-xl font-bold uppercase mb-4 text-blue-700 border-b border-gray-300 pb-2">
          Publications
        </h1>

        <ol className="space-y-4">
          {publications.map((pub, index) => (
            <li
              key={pub.doi}
              className="p-3 hover:bg-blue-50 rounded-md transition-colors flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4"
            >
              <div className="flex gap-3 flex-1 min-w-0">
                <span className="text-purple-600 font-medium flex-shrink-0">
                  [{index + 1}]
                </span>
                <div className="text-sm text-justify">
                  <p className="text-gray-700">{renderAuthors(pub.authors)}</p>
                  <p className="text-gray-800 font-medium">{pub.title}</p>
                  <p className="text-gray-600 italic">
                    {pub.venue}
                    {pub.pages ? `, pp. ${pub.pages}` : ""}
                    {pub.month ? `, ${pub.month} ${pub.year}` : `, ${pub.year}`}
                  </p>
                </div>
              </div>
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 self-start font-medium text-red-600 hover:text-red-800 hover:bg-blue-100 rounded transition-colors sm:ml-auto"
              >
                [DOI]
              </a>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default Publications;
